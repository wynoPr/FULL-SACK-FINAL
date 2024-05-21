import React from 'react'
import './EmerContact.scss'
import Header from '../../components/Header/Header'

export default function EmerContact() {
  return (
    <>
        <Header/>
        <section className='e_contact container' id='e_contact'>
          <h2 className='h1 danger profile_head mg-b-20'>Your emergency Contact:</h2>
            <h2 className='h2 profile_head mg-b-20'>Profile info:</h2>
            <div className='profile_info'>
              <h3 className='h2'>Name: </h3><p className='p-b'>Mº Jacinta López</p>
              <h3 className='h2'>Telf: </h3><p className='p-b'>24-05-24</p>
              <h3 className='h2'>Mail: </h3><p className='p-b'>ja.lo@gmail.com</p>
            </div>
            <button className='btt_txt h2'>Edit your emergency contact</button>
        </section>
    </>
  )
}
