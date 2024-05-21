import React, { useContext } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../App'

export default function Header() {

    const { lastP, setLastP } = useContext(GlobalContext)

  return (
    <header className='header'>
        <Link to='/' className=''><span className="material-symbols-rounded icon link">close</span></Link>
        { ( lastP && lastP !== '/') && <Link to={lastP} className='btt_txt_smol h3'>&lt; Go Back</Link>}

    </header>
  )
}
