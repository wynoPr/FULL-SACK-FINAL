import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
  return (
    <section className='home'>
        <Link className='btt_scanner'><div className='btt_scanner_img' alt='Hypal logo'>Logo</div></Link>
        <nav className='home_nav'> 
            <Link><span className="material-symbols-rounded">history</span><span className='span'>History</span></Link>
            <Link><span className="material-symbols-rounded">for_you</span><span className='span'>Profile</span></Link>
        </nav>
    </section>
  )
}
