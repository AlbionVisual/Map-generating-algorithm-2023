/** @format */

import React, { useRef } from "react";
import "./confirm.css";

const Confirm = ({ name, setState }) => {
  // console.log("Confirm");

  const inputRef = useRef();

  return (
    <div className="confirmInput">
      <p className="confirmLabel">{name}</p>
      <input
        ref={inputRef}
        type="number"
        min="0"
        max="100"
        defaultValue="0"
        onChange={(e) => {
          inputRef.current.value = e.target.value;
        }}
      />
      <button
        onMouseUp={(e) => {
          setState(inputRef.current.value);
        }}>
        Confirm
      </button>
    </div>
  );
};

export default Confirm;
