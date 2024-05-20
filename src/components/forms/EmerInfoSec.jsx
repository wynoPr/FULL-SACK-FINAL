import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function EmerInfoSec() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <h2>Emergency contact</h2>
            <label>
                Name:
                <input
                    type="text"
                    {...register('emerName', {
                        required: 'Emergency contact name is required',
                        maxLength: {
                            value: 9,
                            message: 'Name must be 9 characters or less'
                        }
                    })}
                />
                {errors.emerName && <span>{errors.emerName.message}</span>}
            </label>
            <br />

            <label>
                Telephone:
                <input
                    type="text"
                    {...register('emerTelf', { required: 'Emergency contact telephone is required' })}
                />
                {errors.emerTelf && <span>{errors.emerTelf.message}</span>}
            </label>
            <br />

            <label>
                Email:
                <input
                    type="email"
                    {...register('emerEmail', { required: 'Emergency contact email is required' })}
                />
                {errors.emerEmail && <span>{errors.emerEmail.message}</span>}
            </label>
        </>
    );
}
