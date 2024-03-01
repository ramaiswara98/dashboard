import React from 'react'

import './ChatView.css'
import Label from '../../atoms/Label/Label'
import ChatItems from '../../molecules/ChatItems/ChatItems'
import TextArea from '../../atoms/TextArea/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faSmile } from '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/Button/Button'

function ChatView() {
  return (
    <div className='chat-view-container'>
        <Label bold={true}>Esther Howard</Label>
        <div>
            <ChatItems from={"me"}/>
            <ChatItems from={"you"}/>
        </div>
        <div className='input-chat'>
            <TextArea/>
            <div className='input-chat-bottom'>
                <div className='input-chat-bottom-icon-container'>
                    <FontAwesomeIcon icon={faSmile} className='input-chat-icon'/>
                    <FontAwesomeIcon icon={faPaperclip} className='input-chat-icon'/>
                </div>
                <Button size={"small"}>Send now</Button>
            </div>
        </div>
    </div>
  )
}

export default ChatView