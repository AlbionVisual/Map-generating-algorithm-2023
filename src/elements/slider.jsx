/** @format */

import React, { useRef } from "react";
import "./slider.css";

const Slider = ({ name, setState }) => {
  // console.log("Slider");

  const sliderRef = useRef();
  const inputRef = useRef();

  return (
    <div className="sliderInput">
      <p className="sliderLabel">{name}</p>
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max="100"
        defaultValue="0"
        onMouseUp={(e) => {
          console.log(sliderRef.current.value);
          setState(sliderRef.current.value);
        }}
        onChange={(e) => {
          sliderRef.current.value = e.target.value;
          inputRef.current.value = e.target.value;
        }}
      />
      <input
        ref={inputRef}
        type="number"
        min="0"
        max="100"
        defaultValue="0"
        onBlur={(e) => {
          setState(sliderRef.current.value);
        }}
        onChange={(e) => {
          sliderRef.current.value = e.target.value;
          inputRef.current.value = e.target.value;
        }}
      />
    </div>
  );
};

export default Slider;
