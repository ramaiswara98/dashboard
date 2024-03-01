import React from "react";

import "./Navbar.css";
import Icon from "../../atoms/Icon/Icon";
import {
  faBell,
  faClock,
  faGear,
  faHome,
  faUserGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({pages}) {
  return (
    <div className="navBar-container">
      <Icon active={pages==="dashboard"?true:false} icon={faHome} url={'/'}/>
      <Icon active={pages==="notification"?true:false} icon={faBell} url={'/notification'}/>
      <Icon active={pages==="history"?true:false} icon={faClock} url={'/history'}/>
      <Icon active={pages==="contact"?true:false} icon={faUserGroup} url={'/contact'}/>
      <Icon active={pages==="wallet"?true:false} icon={faWallet} url={'/wallet'}/>
      <Icon active={pages==="settings"?true:false} icon={faGear} url={'/settings'}/>
    </div>
  );
}

export default Navbar;
