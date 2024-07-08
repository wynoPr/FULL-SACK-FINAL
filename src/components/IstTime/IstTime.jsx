import React from 'react'
import './IstTime.scss'

export default function IstTime({type}) {

    const IstTime = () => {
        localStorage.setItem('istTime', 'false');
        const element = document.getElementById('ist');
        element.style.display = 'none';
    };

    const handleCodes = () => {
        // Ruta al PDF que quieres descargar
        const pdfURL = 'https://drive.google.com/drive/folders/10flSZTu066ROdyPq1syjgZVaTTgcx-fs?usp=drive_link';
        
        // Abre una nueva ventana para descargar el PDF
        window.open(pdfURL, '_blank');
      };


  return (
    <div className='ist' id='ist'>
        <div className='ist_msgWind'>
            {type === 'ist' && <>
                
            <h2 className='h1 danger'>Welcome to Hypal</h2>
            <p className='p-b'>
                Please note that this application is a prototype. As such, not all features may be fully implemented or functional at this time. For testing purposes, please use the product images available at the following link:
            </p>
                <button className='btt_txt h3 it danger' onClick={handleCodes} >Product Codes</button>
            <p className='p-b'>
                We appreciate your understanding and feedback as we continue to develop and improve Hypal.
            </p>
            </>}
            <button className='no-bg ist_close' onClick={IstTime}><span className="material-symbols-rounded icon link">close</span></button>
        </div>
    </div>
  )
}
