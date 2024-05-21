import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Navigate, useLocation } from 'react-router-dom'
import './Home.scss'
import History from '../History/History';
import Profile from '../Profile/Profile';
import SOSButton from '../../components/SOSbutton/SOSbutton';
import { GlobalContext } from '../../App';


export default function Home() {
  // console.log('blu');

  const { lastP, setLastP } = useContext(GlobalContext)
 
  const path =  useLocation().pathname;

  //stablish last page viewed
  useEffect(() => {
  
    if (path === '/') {
      return () => {
        setLastP(path);
      }
    }
  }, [])
  //
 
  // Focus on home
   useEffect(() => {
    
    
    
    const element = document.getElementById('home');
    if (element && path === '/') {
      element.scrollIntoView();
      document.querySelector(".master").scrollTo({ top: '0px', behavior: 'smooth' });
    }


    
  }, []);

  //nav when scrollX
  const [detDX, setDetDX] = useState(0);

  useEffect(() => {
    if (path === '/') {
      let startX = 0;
      let currentX = 0;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      // console.log('Touch start:', startX);

    };

    const handleTouchEnd = (event) => {
      const viewportWidth = window.innerWidth;
      const dMin = viewportWidth * 0.6;
      // console.log('Touch end:', currentX);

      if ((currentX - startX) > dMin && currentX != 0) {
        // console.log(-1);
        document.querySelector(".master").scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => {
          setDetDX(-1);
        }, 300); 
      } else if ((currentX - startX) < -dMin && currentX != 0) {
        // console.log(1);
        document.querySelector(".master").scrollTo({ left: (viewportWidth * 2) , behavior: 'smooth' });
        setTimeout(() => {
          setDetDX(1);
        }, 300);
      } else {
        setDetDX(0);
        // console.log(0);
        // console.log( document.querySelector(".master"));
        document.querySelector(".master").scrollTo({ left: viewportWidth, behavior: 'smooth' });
      }
    };

    const handleTouchMove = (event) => {
      currentX = event.touches[0].clientX;
    };

      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);


      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);
  //
  return (
    <>
      { path === '/' && <Profile/>}
    
      <section id='home' className='home'>
        <h2 className='h1 f-w home_title'>Click to Start</h2>
        <Link className='btt_scanner' to='/scanner'>
          <div className='btt_scanner_img' alt='Hypal logo'>Logo</div>
          <div className='blob_a'></div>
          <div className='blob_b'></div>
          <div className='blob_c'></div>
        </Link>
        <SOSButton/>
        <nav className='home_nav'>
          <Link className="link_nav" to='/profile'><span className="material-symbols-rounded icon">for_you</span><span className='span f-w'>Profile</span></Link>
          <div>
            <NavLink className='navy link' to='/profile'>o</NavLink>
            <NavLink className='navy link' to='/'>o</NavLink>
            <NavLink className='navy link' to='/history'>o</NavLink>
          </div>
          <Link className="link_nav" to='/history'><span className="material-symbols-rounded icon">history</span><span className='span f-w'>History</span></Link>
        </nav>
      </section>

      { path === '/' && <History/>}
      
      {/* moves navigations */}
      {(path == '/' && detDX == 1) &&
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/history" />
      }
      {(path == '/' && detDX == -1) &&
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/profile" />
      }
    </>
  )
}
