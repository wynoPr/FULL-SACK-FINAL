import React from 'react'

export default function personalInfoSec({ formData, handleChange, handleFileChange }) {

    return (
        <>
            <h2>Who are you?</h2>
            <input
                type="file"
                name="img"
                onChange={handleFileChange}
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="mail"
                placeholder="Email"
                value={formData.mail}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="pass"
                placeholder="Password"
                value={formData.pass}
                onChange={handleChange}
                required
            />
        </>
    )
}
