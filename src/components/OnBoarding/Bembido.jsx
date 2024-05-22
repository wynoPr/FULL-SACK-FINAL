import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function Bembido() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>Welcome to HyPal</h1>
        <OnBoardingCard 
            img='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg'
            txt='Welcome to HyPal, we will help guide you to consume products safely.'
        />
    </div>
  )
}
