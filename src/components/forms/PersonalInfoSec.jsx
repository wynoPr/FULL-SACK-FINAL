import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
export default function personalInfoSec({ loadFile, imagePreview }) {
    const { register, formState: { errors } } = useFormContext();

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <h2 className='h1 danger form_title'>Who are you?</h2>

            <label className='upload_label'>

                {/* Upload Profile Picture: */}
                <img id="upload-button" src="src/img/dorso.jpg" className="profile_img" />
                <input type="file" {...register('img')} onChange={loadFile} className='file_input' />
                {/* <img id="output" /> */}
            </label>
            {imagePreview && <img src={imagePreview} alt="Profile Preview" className='profile_img' />}
            <br />
            <label>
                <input className='input' type="text" {...register('name', { required: 'Name is required' })} placeholder='Name' />
                {errors.name && <span>{errors.name.message}</span>}
            </label>
            <br />

            <label>
                <input className='input' type="email" {...register('mail', { required: 'Email is required' })} placeholder='Email' />
                {errors.mail && <span>{errors.mail.message}</span>}
            </label>
            <br />

            <label>
                <input className='input' type="telf" {...register('telf', { required: 'Telephone is required' })} placeholder='Telephone Number' />
                {errors.telf && <span>{errors.telf.message}</span>}
            </label>
            <br />

            <label className='r-visibility'>
                <input className='input'
                    type={showPassword ? 'text' : 'password'}
                    {...register('pass', { required: 'Password is required' })} placeholder='Password'
                />
                <button type="button" onClick={togglePasswordVisibility} className='icon link r-visibility_icon'>
                    {showPassword ? <span className="material-symbols-rounded">
                        visibility_off
                    </span> : <span className="material-symbols-rounded">
                        visibility
                    </span>}
                </button>
                {errors.pass && <span>{errors.pass.message}</span>}
            </label>
        </>
    )
};
