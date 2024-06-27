
import React, { useContext, useEffect } from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../App'

export default function Header() {
  const { lastP, setLastP } = useContext(GlobalContext);
  const path = useLocation().pathname;
  
  return (
    <>
      { ( path === '/profile' || path === '/history' || path === '/emergency-contact' || path.includes('/item/') || path === '/history' ) &&
      <header className='header'>
        <Link to='/' className=''><span className="material-symbols-rounded icon link">close</span></Link>
        {/* { ( lastP !== '/' && path !== '/') && <Link to={'/'} className='btt_txt_smol h3'>&lt; Go Back</Link>} */}

      </header>
      }
    </>
  );
}
