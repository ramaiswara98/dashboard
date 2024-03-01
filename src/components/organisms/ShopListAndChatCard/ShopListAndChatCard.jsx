import React from 'react'

import './ShopListAndChatCard.css'
import Card from '../../atoms/Card/Card'
import ShoppingList from '../ShoppingList/ShoppingList'
import ChatView from '../ChatView/ChatView'

function ShopListAndChatCard() {
  return (
    <Card>
      <div className='shop-and-chat'>
        <ShoppingList/>
        <div className='divider-shop-chat'>

        </div>
        <ChatView/>
      </div>
        
    </Card>
  )
}

export default ShopListAndChatCard