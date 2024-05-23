import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function OnEmerg() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>Need help in an emergency</h1>
        <OnBoardingCard
            img='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg'
            txt='In case of emergency we will help you get in touch with whoever you indicate.'
        />
    </div>
  )
}
