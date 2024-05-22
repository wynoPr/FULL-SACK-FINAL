import React from 'react'

export default function OnBoardingCard({img, txt}) {
  return (
    <div className='onBoarding_card'>
        <img className='img_b onBoarding_card_img' src={img} />
        <p className='onBoarding_card_txt h3'>{txt}</p>
    </div>
  )
}
