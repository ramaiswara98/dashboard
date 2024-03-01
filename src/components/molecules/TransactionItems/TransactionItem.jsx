import React from 'react'

import './TransactionItem.css'
import Avatar from '../../atoms/Avatar/Avatar'
import Label from '../../atoms/Label/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function TransactionItem() {
  return (
    <div className='transaction-item-container'>
        <div className='transaction-item-left'>
        <Avatar/>
        <div>
            <Label bold={true}>Bessie Cooper</Label>
            <Label size={"12px"} color={"var(--darkGray)"}>02 July 2023</Label>
        </div>
        </div>
        <div className='transaction-item-right'>
          <Label bold={true}>-$3,000</Label>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{color:'#000'}}/>
        </div>
        
    </div>
  )
}
