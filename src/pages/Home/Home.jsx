import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className='home'>
        <img className='logo_home' src='' alt=''/>
        <nav className='nav_home'>
            <Link className={'h2 fw btt-r'}>Scan</Link>
        </nav>
    </section>
  )
}
