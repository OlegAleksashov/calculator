import React from "react";
import "./CalcHandlerBtn.css";

const CalcHandlerBtn = ({ title, handler }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handler(title);
      }}
    >
      {title}
    </button>
  );
};

export default CalcHandlerBtn;
