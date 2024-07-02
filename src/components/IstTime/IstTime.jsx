import React from 'react'
import './IstTime.scss'

export default function IstTime() {

    const IstTime = () => {
        localStorage.setItem('istTime', 'false');
        const element = document.getElementById('ist');
        element.style.display = 'none';
    };


  return (
    <div className='ist' id='ist'>
        <div className='ist_msgWind'>
            
                
            <h2 className='h1 danger'>Welcome to Hypal</h2>
            <p className='p-b'>
                Please note that this application is a prototype. As such, not all features may be fully implemented or functional at this time. For testing purposes, please use the product images available at the following link:
            </p>
                Scan Product Images
            <p className='p-b'>
                We appreciate your understanding and feedback as we continue to develop and improve Hypal.
            </p>
            <button className='no-bg' onClick={IstTime}><span className="material-symbols-rounded icon link">close</span></button>
        </div>
    </div>
  )
}
