import React from "react";

import "./Button.css";
function Button({ size, children, onClick }) {
  return (
    <>
      {size === "small" && (
        <div className="button-container small" onClick={onClick}>
          {children}
        </div>
      )}
      {size === "full" && (
        <div className="button-container full" onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
}

export default Button;
