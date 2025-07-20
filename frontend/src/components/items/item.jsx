import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  console.log(props)
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
      <p>{props.name}</p>
      <div className="newPrice">
        ${props.newPrice}
      </div>
      <div className="oldPrice">
        ${props.oldPrice}
      </div>
    </div>
  )
}

export default Item