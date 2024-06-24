import React from 'react'
import OnBoardingCard from './OnBoardingCard'

export default function OnEmerg() {
  return (
    <div className='onboard'>
        <h1 className='h1 inicio_head danger'>Need help in an emergency</h1>
        <OnBoardingCard
            img='https://www.tempe.gov/home/showpublishedimage/33196/636446361070470000'
            txt='In case of emergency we will help you get in touch with whoever you indicate.'
        />
    </div>
  )
}
