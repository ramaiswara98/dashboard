import React from "react";

import "./TextArea.css";

function TextArea({ value, onChange }) {
  return (
    <div>
      <textarea
        className="text-area"
        placeholder="Type Here"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextArea;
