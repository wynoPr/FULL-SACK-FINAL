import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function SOSbutton() {

  const { lastP, setLastP } = useContext(GlobalContext)
 
  const path =  useLocation().pathname;

  const [pressTimer, setPressTimer] = useState(null);
  const navigate = useNavigate();

  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      navigate('/emergency-contact'); // Navegar a /emergency-contact después de 3 segundos
    }, 3000); // 3 segundos
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
      navigate('/styles');// Navegar a /styles si se libera antes de 3 segundos
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
