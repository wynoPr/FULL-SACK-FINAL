import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <Link className='btt_txt_smol h3'>&lt; Go Back</Link>
        <Link to='/'  className=''><span className="material-symbols-rounded icon link">close</span></Link>

    </header>
  )
}
