import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Navigate, useLocation } from 'react-router-dom'
import './Loading.scss'
import SOSButton from '../../components/SOSbutton/SOSbutton';

export default function Loading() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 100);
    }, [])
    
    

  return (
    <section className={isLoaded ? 'home loading d-none': 'home loading d-flex'} >
          <h2 className='h1 f-w home_title '>Click to Start</h2>    
          <Link className='btt_scanner' to='/scanner'>
          <div className='btt_scanner_img' alt='Hypal logo'>Logo</div>
          <div className='blob_a'></div>
          <div className='blob_b'></div>
          <div className='blob_c'></div>
          </Link>
          <SOSButton className=' '/>
          <nav className='home_nav '> 
            <Link className="link_nav" to='/profile'><span className="material-symbols-rounded icon">for_you</span><span className='span f-w'>Profile</span></Link>
            <div>
              <NavLink className='navy link' to='/profile'>o</NavLink>
              <NavLink className='navy link' to='/'>o</NavLink>
              <NavLink className='navy link' to='/history'>o</NavLink>
            </div>
            <Link className="link_nav" to='/history'><span className="material-symbols-rounded icon">history</span><span className='span f-w'>History</span></Link>  
          </nav>
      </section>
  )
}
