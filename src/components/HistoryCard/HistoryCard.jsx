import React from 'react'
import './HistoryCard.scss'
import { Link } from 'react-router-dom'



export default function HistoryCard({ item }) {
  console.log(item);
  return (
    <>
      {item && <Link to={`/item/${item.code}`} className='historyCard link'>
      <img className='img_s valid' src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9NkZqeT3lvHk56k8YbjNvvI39invhmn23rHci3FuUbNDJPDa3tAZrWXLP1JdJJxVy78GwU6kLkoHFlK4hhAQsPbXozZtwmjmf3Eho8K93ey_z6V0KrQ7J' alt='' />
      <div className='historyCard_info'>
        <h3 className='h3 mg-b-10'>{item.name}</h3>
      </div>
      <div className='historyCard_info_list'>
        {item.ing.map((ing, i) =>

          (<span key={i} className='tag_danger span mg-b-10'>{ing}</span>)
        )}
      </div>
      <button className='close'><span className="material-symbols-rounded icon link">close</span></button>
    </Link>}
    </>
  )
}
