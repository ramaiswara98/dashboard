import React from 'react'

import './ChatItems.css'
import Avatar from '../../atoms/Avatar/Avatar'
import ChatBuble from '../../atoms/ChatBuble/ChatBuble'

function ChatItems({from,avatar, text}) {
  return (
    <>
    {from === "me" && (
        <div className='chat-items-me'>
            <ChatBuble from={"me"} text={text}/>
            <Avatar src={avatar}/>
        </div>
    )}
     {from === "you" && (
        <div className='chat-items-you'>
             <Avatar src={avatar}/>
            <ChatBuble from={"you"} text={text}/>
           
        </div>
    )}
    </>
  )
}

export default ChatItems