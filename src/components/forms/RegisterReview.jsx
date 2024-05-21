import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function RegisterReview() {
    const { getValues } = useFormContext();
    const values = getValues()
    return (
        <div>
            <h2 className='h1 danger form_title'>Please review the data before creating your profile.</h2>
            <p className='h2'>Name: {values.name}</p>
            <p className='h2'>Email: {values.mail}</p>
            <p className='h2'>Phone Number: {values.telf}</p>
            <p className='h2'>Password: {values.pass}</p>
        </div>
    )
}
