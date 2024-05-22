import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function Utilities() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>How can we help</h1>
        <OnBoardingCard
            img='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg'
            txt='Scan the article and find out instantly if you can eat it or should avoid it.'
        />
    </div>
  )
}
