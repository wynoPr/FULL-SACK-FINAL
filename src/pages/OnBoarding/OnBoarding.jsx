import React, { useState } from 'react'
import Inicio from '../../components/OnBoarding/Inicio'
import './OnBoarding.scss'
import Bembido from '../../components/OnBoarding/Bembido';

export default function OnBoarding() {

    const [board, setBoard] = useState(0);
    const [imagePreview, setImagePreview] = useState()

    const nextStep = () => setBoard(board + 1);
    const prevStep = () => setBoard(board - 1);

    const onBoardingSwitch = () => {
        switch (board) {
            case 0:
                return <Inicio/>;
            case 1:
                return <Bembido/>;
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
    </section>
  )
}
