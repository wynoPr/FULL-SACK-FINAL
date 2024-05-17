import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
  return (
    <section className='home'>
        <img className='home_logo' src='' alt=''/>
        {/* <nav className='home_nav'>
            <Link className={'h2 fw btt-r_round_big btt1'}>Scan</Link>
            <Link className={'h2 fw btt_round_big btt6'}>Share</Link>
            <Link className={'h2 fw btt_round_big btt7'}>Log Out</Link>
            <Link className={'h2 fw btt_round_smol btt2'}>History</Link>
            <Link className={'h2 fw btt_round_smol btt3'}>Profile</Link>
            <Link className={'h2 fw btt_round_smol btt4'}>Language</Link>
            <Link className={'h2 fw btt_round_smol btt5'}>Terms</Link>
        </nav> */}
    </section>
  )
}
