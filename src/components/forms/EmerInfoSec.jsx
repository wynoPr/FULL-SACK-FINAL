import React from 'react'

export default function emerInfoSec({ formData, handleChange }) {
    return (
        <>
            <h2>Emergency contact</h2>
            <input
                type="text"
                name="emerName"
                placeholder="name"
                value={formData.emerName}
                onChange={handleChange}
                maxLength="9"
            />
            <input
                type="text"
                name="emerTelf"
                placeholder="emerTelf"
                value={formData.emerTelf}
                onChange={handleChange}
            />
            <input
                type="text"
                name="emerEmail"
                placeholder="emerEmail"
                value={formData.emerEmail}
                onChange={handleChange}
            />
        </>
    )
}
