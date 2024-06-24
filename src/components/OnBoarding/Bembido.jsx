import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function Bembido() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>Welcome to HyPal</h1>
        <OnBoardingCard 
            img='https://res.cloudinary.com/dct2fwidb/image/upload/v1716391695/teqb2yaee6ejk5krfq9w.png'
            txt='Welcome to HyPal, we will help guide you to consume products safely.'
        />
    </div>
  )
}
