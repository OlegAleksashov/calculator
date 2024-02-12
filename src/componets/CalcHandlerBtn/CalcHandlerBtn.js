import React from "react";
import "./CalcHandlerBtn.css";

const CalcHandlerBtn = ({ title, handler }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handler(title);
        console.log(title);
      }}
    >
      {title}
    </button>
  );
};

export default CalcHandlerBtn;
