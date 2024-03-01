import React from 'react'

import './ChatBuble.css'
import Label from '../Label/Label'

function ChatBuble({from}) {
  return (
    <>
    {from === "me" && (
        <div className='chat-buble-me'>
            <Label color={"var(--white)"}>Text Here</Label>
        </div>
    )}

    {from === "you" && (
        <div className='chat-buble-you'>
            <Label size={"regular"}>Text Here</Label>
        </div>
    )}
    
</>
  )
}

export default ChatBuble