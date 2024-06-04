import React from 'react'
import './HistoryCard.scss'
import { Link } from 'react-router-dom'



export default function HistoryCard({ item }) {
  console.log(item);
  return (
    <>
      {item && <Link to={`/item/${item.code}`} className='historyCard link'>
      <img className='img_s invalid' src={item.img} alt='' />
      <div className='historyCard_info'>
        <h3 className='h3 mg-b-10'>{item.name}</h3>
      </div>
      <div className='historyCard_info_list'>
        {item.ing.map((ing, i) =>

          (<span key={i} className='tag_danger span mg-b-10'>{ing}</span>)
        )}
      </div>
      {/* <button className='close'><span className="material-symbols-rounded icon link">close</span></button> */}
    </Link>}
    </>
  )
}
