import React from "react";
import "./InputValue.css";

const InputValue = ({ value, handler }) => {
  return (
    <div className="input">
      <textarea
        id="output"
        cols={40}
        rows={12}
        value={value}
        placeholder="0"
        onKeyDown={handler}
      />
    </div>
  );
};

export default InputValue;
