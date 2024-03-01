import React from "react";

import "./Bars.css";

function Bars({ left, right }) {
  return (
    <div className="bars-container">
      <div className="bars-left" style={{ width: left }}></div>
      <div className="bars-right" style={{ width: right }}></div>
    </div>
  );
}

export default Bars;
