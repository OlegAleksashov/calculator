import React from "react";

const ButtonDeleteOne = ({ title, handler }) => {
  return (
    <button className="button" onClick={handler}>
      {title}
    </button>
  );
};

export default ButtonDeleteOne;
