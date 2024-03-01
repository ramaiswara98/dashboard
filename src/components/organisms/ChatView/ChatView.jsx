import React from 'react'

import './ChatView.css'
import Label from '../../atoms/Label/Label'
import ChatItems from '../../molecules/ChatItems/ChatItems'
import TextArea from '../../atoms/TextArea/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faSmile } from '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/Button/Button'
import User1 from '../../../assets/images/user1.png'
import User2 from '../../../assets/images/user2.png'

function ChatView() {
  return (
    <div className='chat-view-container'>
        <Label bold={true}>Esther Howard</Label>
        <div>
            <ChatItems from={"me"} text={"Are you ready ?"} avatar={User1}/>
            <ChatItems from={"you"} text={"I have prepared everything"} avatar={User2}/>
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