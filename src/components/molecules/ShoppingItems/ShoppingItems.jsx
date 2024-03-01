import React from 'react'

import './ShoppingItems.css'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function ShoppingItems() {
  return (
    <div className='shopping-items-container'>
        <CheckBox checked={true}/>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{color:'#000'}}/>
    </div>
  )
}

export default ShoppingItems