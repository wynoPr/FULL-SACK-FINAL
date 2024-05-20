import React from 'react'
import './HistoryCard.scss'
import { Link } from 'react-router-dom'

export default function HistoryCard() {
  return (
    <Link to='' className='historyCard link'>
        <img className='img_s valid' src='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg' alt=''/>
        <div className='historyCard_info'>
            <h3 className='h3 mg-b-10'>Product Name</h3>
            <span className='span mg-b-20 faint'>17 - 05 - 24</span>
        </div>
        <div className='historyCard_info_list'>
                <span className='tag_danger span  mg-b-10'>Gluten</span>
                <span className='tag_danger span  mg-b-10'>Trigo</span>
                <span className='tag_danger span  mg-b-10'>Glutamato</span>
                <span className='tag_danger span  mg-b-10'>Substancia X</span>
                <span className='tag_danger span  mg-b-10'>Piña</span>
        </div>
        <button className='close'><span className="material-symbols-rounded icon link">close</span></button>
    </Link>
  )
}
