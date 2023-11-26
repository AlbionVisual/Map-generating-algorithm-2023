/** @format */

import React, { useRef } from "react";
import "./controls.css";
import Slider from "./slider";
import Confirm from "./confirm";

const Controls = ({ sliders, confirm }) => {
  // console.log("Controls")

  return (
    // JSX (--name-- --slider-- --input-- [[sliders]])
    //     (--name-- --input-- --button-- [[confirm]])
    <div className="controls">
      <h2>Control room</h2>
      {sliders &&
        sliders.map((el, ind) => {
          return (
            <Slider name={el.name} key={ind} setState={el.setState}></Slider>
          );
        })}
      {confirm &&
        confirm.map((el, ind) => {
          return (
            <Confirm name={el.name} key={ind} setState={el.setState}></Confirm>
          );
        })}
    </div>
  );
};

export default Controls;
