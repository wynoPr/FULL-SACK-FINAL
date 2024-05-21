import React, { useEffect, useState } from 'react'
import './Profile.scss'
import Home from '../Home/Home';
import History from '../History/History';
import { Navigate } from 'react-router-dom';

export default function Profile() {

    const path = window.location.pathname;

    useEffect(() => {
      const element = document.getElementById('profile');
      if (element && path === '/profile') {
        element.scrollIntoView();
      }
    }, [])

    //nav when scrollX
  const [detDX, setDetDX] = useState(0);

  useEffect(() => {
    if ( path === '/profile') {
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

      if ((currentX - startX ) < dMin && currentX != 0) {
        // console.log(1);
        document.querySelector(".master").scrollTo({ left: viewportWidth, behavior: 'smooth' });
        setTimeout(() => {
          setDetDX(1);
        }, 300); 
      } else {
        setDetDX(0);
        // console.log(0);
        // console.log( document.querySelector(".master"));
        document.querySelector(".master").scrollTo({ left: 0, behavior: 'smooth' });
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
   

  return (
    <>
        <section className='profile container' id='profile'>
          <h2 className='h1 danger profile_head mg-b-20'>Hello dear,<br/> what's the news?</h2>
            <img className='img-r' src='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg' alt=''/>
            <h2 className='h2 profile_head mg-b-20'>Profile info:</h2>
            <div className='profile_info'>
              <h3 className='h2'>Name: </h3><p className='p-b'>Mº Jacinta López</p>
              <h3 className='h2'>Mail: </h3><p className='p-b'>ja.lo@gmail.com</p>
              <h3 className='h2'>Pal since: </h3><p className='p-b'>24-05-24</p>
            </div>
            <div className='profile_allergies'>
              <h2 className='h2 profile_allergies_head mg-b-20'>Allergies:</h2>
              <span className='tag_alt_danger span  mg-b-10'>Gluten</span>
              <span className='tag_alt_danger span  mg-b-10'>Trigo</span>
              <span className='tag_alt_danger span  mg-b-10'>Glutamato</span>
              <span className='tag_alt_danger span  mg-b-10'>Substancia-X</span>
              <span className='tag_alt_danger span  mg-b-10'>Piña</span>
            </div>
            <button className='btt_txt h2'>Edit your profile</button>
        </section>
        { path === '/profile' && <Home/>}
        {(path == '/profile' && detDX == 1) &&
          // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
          <Navigate to="/" />
        }
    </>
  )
}
