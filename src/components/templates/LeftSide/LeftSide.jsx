import React from "react";

import "./LeftSide.css";
import Logo from "../../atoms/Logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";
import Icon from "../../atoms/Icon/Icon";
import {
  faMessage,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../atoms/Avatar/Avatar";

function LeftSide({pages}) {
  return (
    <div className="left-side-container">
      <div className="logo-message">
        <Logo />
        <Icon icon={faMessage} />
      </div>
      <div>
        <Navbar pages={pages}/>
      </div>
      <div className="avatar-logout">
        <Avatar />
        <Icon icon={faRightFromBracket} />
      </div>
    </div>
  );
}

export default LeftSide;
