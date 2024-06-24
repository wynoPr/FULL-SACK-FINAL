import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function SOSbutton() {

  const { lastP, setLastP } = useContext(GlobalContext)
 
  const path =  useLocation().pathname;

  const [pressTimer, setPressTimer] = useState(null);
  const navigate = useNavigate();
  
  // Navegar a /emergency-contact después de 2 segundo
  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      {path !== '/emergency-contact' && navigate('/emergency-contact')}; 
    }, 2000); 
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
      window.location.href = 'tel:+1234567890';
    }
  };

  return (
    <button
      className='btt_danger h2 home_emergency'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      S.O.S.
    </button>
  )
}
