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
            <h2>Who are you?</h2>

            <label>
                Upload Profile Picture:
                <input type="file" {...register('img')} onChange={loadFile} />
                {/* <img id="output" /> */}
            </label>
            {imagePreview && <img src={imagePreview} alt="Profile Preview" style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }} />}
            <br />
            <label>
                Name:
                <input type="text" {...register('name', { required: 'Name is required' })} />
                {errors.name && <span>{errors.name.message}</span>}
            </label>
            <br />

            <label>
                Email:
                <input type="email" {...register('mail', { required: 'Email is required' })} />
                {errors.mail && <span>{errors.mail.message}</span>}
            </label>
            <br />

            <label>
                Telf:
                <input type="telf" {...register('telf', { required: 'Telephone is required' })} />
                {errors.telf && <span>{errors.telf.message}</span>}
            </label>
            <br />

            <label>
                Password:
                <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('pass', { required: 'Password is required' })}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                </button>
                {/* <input type="password" {...register('pass', { required: 'Password is required' })} /> */}
                {errors.pass && <span>{errors.pass.message}</span>}
            </label>
        </>
    )
};
