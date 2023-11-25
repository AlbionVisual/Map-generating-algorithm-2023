/** @format */

import React, { useRef } from "react";
import "./controls.css";

const Controls = ({ sliders }) => {
  return (
    // JSX (--name-- --slider-- --input-- [[sliders]])
    <div className="controls">
      <h2>Control room</h2>
      {sliders &&
        sliders.map((el, ind) => {
          const sliderRef = useRef();
          const inputRef = useRef();

          return (
            <div className="sliderContainer" key={ind}>
              <p className="sliderLabel">{el.name}</p>
              <input
                ref={sliderRef}
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                onMouseUp={(e) => {
                  el.setState(sliderRef.current.value);
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
                  el.setState(sliderRef.current.value);
                }}
                onChange={(e) => {
                  sliderRef.current.value = e.target.value;
                  inputRef.current.value = e.target.value;
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Controls;
