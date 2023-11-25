/** @format */

import "./App.css";
import React, { useState } from "react";
import Map from "./elements/map";
import Controls from "./elements/controls";

// Consts
const SIZEX = 100,
  SIZEY = 100;

// Default functions
const buildDefaultWorld = () => {
  // fill world with color
  const defaultWorld = [[]];
  for (let i = 0; i < SIZEY; i++) {
    defaultWorld[i] = [];
    for (let k = 0; k < SIZEX; k++) {
      defaultWorld[i][k] = { bg: "#ffffff" }; // you can use "rgb(r,b,g)" here
    }
  }
  return defaultWorld;
};
const changeValue = (obj, whatChange, withWhat) => {
  // change all values in array of arrays of ... of objects
  let newObj;
  if (Array.isArray(obj)) {
    newObj = [...obj];
    for (let i = 0; i < newObj.length; i++) {
      newObj[i] = changeValue(newObj[i], whatChange, withWhat);
    }
  } else {
    newObj = { ...obj };
    newObj[whatChange] = withWhat;
  }
  return newObj;
};

const App = () => {
  // console.log("App");

  // States
  const [world, setWorld] = useState(buildDefaultWorld);
  const [appMargin, setAppMargin] = useState(0); // in px

  // Help funcitons:
  const changeBackground = (newVal) => {
    const koff = 255 - (newVal * 255) / 100;
    setWorld(changeValue(world, "bg", `rgb(${koff},${koff},${koff})`));
  };

  return (
    // JSX --controls-- --map--
    <div className="app" style={{ margin: `${appMargin}px` }}>
      <Controls
        sliders={[
          { name: "App margin (in px): ", setState: setAppMargin },
          {
            name: "Change background (grayness): ",
            setState: changeBackground,
          },
        ]}></Controls>
      {/* sliders - name: label near your slider, setState: function to change you value. Gives new value (0 - 100) */}
      <Map world={world}></Map>
    </div>
  );
};

export default App;
