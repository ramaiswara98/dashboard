import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Icon.css";
import { useNavigate } from "react-router-dom";

function Icon({ icon, active, url }) {
  const navigate = useNavigate(); 
  return (
    <div className={active ? " active icon-container" : "icon-container"}
      onClick={()=>navigate(url) }
    >
      <FontAwesomeIcon
        icon={icon}
        className={active ? "ic-active icons" : "icons"}
      />
    </div>
  );
}

export default Icon;
