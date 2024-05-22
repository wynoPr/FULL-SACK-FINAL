import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function EmerInfoSec() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <h2 className='h1 danger form_title'>Let´s add your emergency contact</h2>
            <h2 className='h3 it faint form_subtitle'>We´ll contact your emergency contact in case of emergency</h2>
            <label>

                <input className='input'
                    type="text"
                    {...register('emerName', {
                        required: 'Emergency contact name is required',
                        maxLength: {
                            value: 9,
                            message: 'Name must be 9 characters or less'
                        }
                    })} placeholder='Name'
                />
                {errors.emerName && <span>{errors.emerName.message}</span>}
            </label>
            <br />

            <label>

                <input className='input'
                    type="text"
                    {...register('emerTelf', { required: 'Emergency contact telephone is required' })}
                    placeholder='Telephone Number'
                />
                {errors.emerTelf && <span>{errors.emerTelf.message}</span>}
            </label>
            <br />

            <label>

                <input className='input'
                    type="email"
                    {...register('emerEmail', { required: 'Emergency contact email is required' })}
                    placeholder='Email'
                />
                {errors.emerEmail && <span>{errors.emerEmail.message}</span>}
            </label>
        </>
    );
}
