import React from 'react'

import './TransactionItem.css'
import Avatar from '../../atoms/Avatar/Avatar'
import Label from '../../atoms/Label/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function TransactionItem({transaction}) {
  return (
    <div className='transaction-item-container'>
        <div className='transaction-item-left'>
        <Avatar src={transaction.avatar}/>
        <div>
            <Label bold={true}>{transaction.name}</Label>
            <Label size={"12px"} color={"var(--darkGray)"}>{transaction.date}</Label>
        </div>
        </div>
        <div className='transaction-item-right'>
          <Label bold={true}>{transaction.amount}</Label>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{color:'#000'}}/>
        </div>
        
    </div>
  )
}
