import React from "react";

import "./Label.css";

function Label({ children, size, color, bold, align }) {
  const style = {
    fontSize: size || "14px",
    color: color || "black",
    fontWeight: bold ? "bold" : "normal",
    textAlign: align || "left",
  };
  return (
    <>
      <p className="regular" style={style}>
        {children}
      </p>
    </>
  );
}

export default Label;
