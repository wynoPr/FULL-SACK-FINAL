import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function Utilities() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>How can we help</h1>
        <OnBoardingCard
            img='https://codecheck-app.com/wp-content/uploads/2019/10/Mobile_en_1.png'
            txt='Scan the item and find out instantly if you can eat it or should avoid it.'
        />
    </div>
  )
}
