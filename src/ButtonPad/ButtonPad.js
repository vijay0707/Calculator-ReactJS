import "./ButtonPad.css";

import React from "react";

const ButtonPad = (props) => {
  return (
    <div className="pad-container ui center aligned container">
      {props.children}
    </div>
  );
};

export default ButtonPad;
