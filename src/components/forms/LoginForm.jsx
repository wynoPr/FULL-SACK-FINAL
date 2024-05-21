import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', data);
            console.log('Intento Login successful:', response.data);
            // Puedes almacenar el token de autenticación o redirigir al usuario aquí
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="mail">Email</label>
                    <input
                        id="mail"
                        type="email"
                        {...register('mail', { required: 'Email is required' })}
                    />
                    {errors.mail && <span>{errors.mail.message}</span>}
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input
                        id="pass"
                        type="password"
                        {...register('pass', { required: 'Password is required' })}
                    />
                    {errors.pass && <span>{errors.pass.message}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
