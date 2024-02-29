import React from 'react'

import './TransactionItem.css'
import Avatar from '../../atoms/Avatar/Avatar'
import Label from '../../atoms/Label/Label'

export default function TransactionItem() {
  return (
    <div className='transaction-item-container'>
        <div className='transaction-item-left'>
        <Avatar/>
        <div>
            <Label size={"regular-bold"}>Bessie Cooper</Label>
            <Label size={"regular"}>02 July 2023</Label>
        </div>
        </div>
        <Label size={"regular-bold"}>-$3,000</Label>
    </div>
  )
}
