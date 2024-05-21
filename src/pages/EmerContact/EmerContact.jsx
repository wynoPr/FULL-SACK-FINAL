import React, { useContext, useEffect } from 'react'
import './EmerContact.scss'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../App';
import { useLocation } from 'react-router-dom';
import SOSbutton from '../../components/SOSbutton/SOSbutton';

export default function EmerContact() {

    const { lastP, setLastP } = useContext(GlobalContext)
 
    const path =  useLocation().pathname;

    //stablish last page viewed
    useEffect(() => {
        console.log(lastP)
    
        return () => {
        setLastP(path)
        // console.log(lastP);
        }
    }, [])
  //
    

  return (
    <>
        <Header/>
        <section className='e-contact container' id='e_contact'>
            <div className='e-contact_info'>
                <h2 className='h1 danger e-contact_head mg-b-20'>Emergency Contact:</h2>
                <h2 className='h2 e-contact_head mg-b-20'>Profile info:</h2>
              <h3 className='h2'>Name: </h3><p className='p-b'>Mº Jacinta López</p>
              <h3 className='h2'>Telf: </h3><p className='p-b'>24-05-24</p>
              <h3 className='h2'>Mail: </h3><p className='p-b'>ja.lo@gmail.com</p>
            </div>
            <button className='btt_txt h2 e-contact_btt'>Edit your emergency contact</button>
            <SOSbutton/>
        </section>
    </>
  )
}
