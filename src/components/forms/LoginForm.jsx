import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../App';

export default function LoginForm() {

    const {  refresh, setRefresh } = useContext(GlobalContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', data);
            console.log('Intento Login successful:', response.data);
            localStorage.setItem('authToken', response.data.data.token);
            setRefresh( refresh + 1)
            localStorage.setItem('userInfo', JSON.stringify(response.data.data.user));
            setTimeout(() => {
                navigate('/')
            }, 50); 
            // Puedes almacenar el token de autenticación o redirigir al usuario aquí
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };
    return (
        <section className='container login'>
            <h2 className='h1 danger form_title'>Welcome Back</h2>
            <p className='h3 it faint '>Please enter your details to continue</p>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="mail"></label>
                    <input className='input' placeholder='email'
                        id="mail"
                        type="email"
                        {...register('mail', { required: 'Email is required' })}
                    />
                    {errors.mail && <span>{errors.mail.message}</span>}
                </div>
                <div>
                    <label htmlFor="pass"></label>
                    <input className='input' placeholder='password'
                        id="pass"
                        type="password"
                        {...register('pass', { required: 'Password is required' })}
                    />
                    {errors.pass && <span>{errors.pass.message}</span>}
                </div>
                <button type="submit" className='btt h3'>Login</button>
            </form>
            <p className='h3'>New on Hypal?</p>
            <Link className='span btt_txt it danger' to="/register">Sign in</Link>

        </section>
    )
}
