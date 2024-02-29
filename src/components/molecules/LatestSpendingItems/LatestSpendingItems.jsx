import React from 'react'

import './LatestSpendingItems.css'
import Shop from '../../../assets/images/shop.png'
import Label from '../../atoms/Label/Label'

function LatestSpendingItems({img, text, date}) {
  return (
    <div className='latest-item-container'>
        <img src={img} className='latest-item-img'/>
        <div className='latest-item-text'>
            <Label size={"regular-bold"}>{text}</Label>
            <Label size={"regular-bold"}>{date}</Label>
        </div>
    </div>
  )
}

export default LatestSpendingItems