import "./Display.css";

import React from "react";

const Display = (props) => {
  return (
    <div className="ui massive input Display">
      <input
        className="inputField"
        type="text"
        placeholder="0"
        value={props.data}
      />
    </div>
  );
};

export default Display;
