import React, { useEffect, useRef, useState } from "react";

import "./ChatView.css";
import Label from "../../atoms/Label/Label";
import ChatItems from "../../molecules/ChatItems/ChatItems";
import TextArea from "../../atoms/TextArea/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button/Button";
import User1 from "../../../assets/images/user1.png";
import { dummy } from "../../../utils/DummyData";

function ChatView() {
  const [chatList, setChatList] = useState(dummy.chatList);
  const [text, setText] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatList]);
  const handleSendNowOnClick = () => {
    if (text !== "") {
      const newChatList = [...chatList];
      const newChat = {
        from: "me",
        text,
        avatar: User1,
      };
      newChatList.push(newChat);
      setChatList(newChatList);
      setText("");
    }
  };

  const handleOnChange = (value) => {
    setText(value);
  };

  return (
    <div className="chat-view-container">
      <Label bold={true}>Esther Howard</Label>
      <div className="chat-area">
        {chatList.map((chat, index) => {
          return (
            <ChatItems
              from={chat.from}
              text={chat.text}
              avatar={chat.avatar}
              key={index}
            />
          );
        })}
        <div ref={chatRef} />
      </div>
      <div className="input-chat">
        <TextArea value={text} onChange={handleOnChange} />
        <div className="input-chat-bottom">
          <div className="input-chat-bottom-icon-container">
            <FontAwesomeIcon icon={faSmile} className="input-chat-icon" />
            <FontAwesomeIcon icon={faPaperclip} className="input-chat-icon" />
          </div>
          <Button size={"small"} onClick={handleSendNowOnClick}>
            Send now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatView;
