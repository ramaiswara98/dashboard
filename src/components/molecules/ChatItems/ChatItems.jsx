import React from 'react'

import './ChatItems.css'
import Avatar from '../../atoms/Avatar/Avatar'
import ChatBuble from '../../atoms/ChatBuble/ChatBuble'

function ChatItems({from}) {
  return (
    <>
    {from === "me" && (
        <div className='chat-items-me'>
            <ChatBuble from={"me"}/>
            <Avatar/>
        </div>
    )}
     {from === "you" && (
        <div className='chat-items-you'>
             <Avatar/>
            <ChatBuble from={"you"}/>
           
        </div>
    )}
    </>
  )
}

export default ChatItems