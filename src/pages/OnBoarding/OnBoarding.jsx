import React, { useState } from 'react'
import Inicio from '../../components/OnBoarding/Inicio'
import './OnBoarding.scss'
import Bembido from '../../components/OnBoarding/Bembido';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Utilities from '../../components/OnBoarding/Utilities';
import OnEmerg from '../../components/OnBoarding/OnEmerg';

export default function OnBoarding() {

    const [board, setBoard] = useState(0);
    const [imagePreview, setImagePreview] = useState()

    const nextStep = () => setBoard(board + 1);
    const prevStep = () => setBoard(board - 1);

    const navigate = useNavigate();

    const onBoard = () => {
        localStorage.setItem('onBoard', 'true');
        navigate('/login')
    }

    const Boarded = localStorage.getItem('onBoard')


    const onBoardingSwitch = () => {
        switch (board) {
            case 0:
                return <Inicio/>;
            case 1:
                return <Bembido/>;
            case 2:
                 return <Utilities/>;
            case 3:
                return <OnEmerg/>;     
        }
    };

    if (board === 0) {
        setTimeout(() => {
            setBoard(1)
        }, 3000);
    }

  return (
    <section className='onBoarding container'>
        {onBoardingSwitch()}
        { board !== 0 &&
            <nav className='onBoarding_nav'>
                { board !== 1 ? <button className='btt_txt h2 link' onClick={prevStep}>&lt; Back</button> : <div></div>}
                <button onClick={onBoard} className='btt_txt_alt h3 link'>Skip</button>
                { board !== 3 ? <button className='btt_txt h2 link' onClick={nextStep}>Next &gt;</button> : <button onClick={onBoard} className='btt_txt h3 link' >Finish</button>}
            </nav>
            }
            { Boarded == 'true' && <Navigate to="/" />}
    </section>
  )
}
