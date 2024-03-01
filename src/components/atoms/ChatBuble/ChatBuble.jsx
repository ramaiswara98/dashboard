import React from 'react'

import './ChatBuble.css'
import Label from '../Label/Label'

function ChatBuble({from, text}) {
  return (
    <>
    {from === "me" && (
        <div className='chat-buble-me'>
            <Label color={"var(--white)"}>{text}</Label>
        </div>
    )}

    {from === "you" && (
        <div className='chat-buble-you'>
            <Label size={"regular"}>{text}</Label>
        </div>
    )}
    
</>
  )
}

export default ChatBuble