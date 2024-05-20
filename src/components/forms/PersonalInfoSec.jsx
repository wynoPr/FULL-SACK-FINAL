import React from 'react'
import { useFormContext } from 'react-hook-form';
export default function personalInfoSec() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <h2>Who are you?</h2>

            <label>
                Upload Profile Picture:
                <input type="file" {...register('img')} />
            </label>
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
                Password:
                <input type="password" {...register('pass', { required: 'Password is required' })} />
                {errors.pass && <span>{errors.pass.message}</span>}
            </label>
        </>
    )
};
