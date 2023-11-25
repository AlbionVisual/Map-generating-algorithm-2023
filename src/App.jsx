/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
import Map from "./elements/map";
import Controls from "./elements/controls";

// Consts
const SIZEX = 4,
  SIZEY = 4;

// Default functions
const buildDefaultWorld = () => {
  // fill world with color
  const defaultWorld = [[]];
  for (let i = 0; i < SIZEY; i++) {
    defaultWorld[i] = [];
    for (let k = 0; k < SIZEX; k++) {
      defaultWorld[i][k] = { BGRed: 0, BGGreen: 0, BGBlue: 0 }; // you can use "rgb(r,b,g)" here
    }
  }
  return defaultWorld;
};
const changeValue = (obj, whatChange, withWhat, how = "replace") => {
  // change all values in array of arrays of ... of objects
  let newObj;
  if (Array.isArray(obj)) {
    newObj = [...obj];
    for (let i = 0; i < newObj.length; i++) {
      newObj[i] = changeValue(newObj[i], whatChange, withWhat, how);
    }
  } else {
    newObj = { ...obj };
    if (how == "replace") newObj[whatChange] = withWhat;
    else if (how == "add")
      newObj[whatChange] = Number(newObj[whatChange]) + Number(withWhat);
    else if (how == "remove")
      newObj[whatChange] = Number(newObj[whatChange]) - Number(withWhat);
    else if (how == "times")
      newObj[whatChange] = Number(newObj[whatChange]) * Number(withWhat);
    else if (how == "devide")
      newObj[whatChange] = Number(newObj[whatChange]) / Number(withWhat);
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
    let newWorld = changeValue(world, "BGRed", koff);
    newWorld = changeValue(newWorld, "BGGreen", koff);
    newWorld = changeValue(newWorld, "BGBlue", koff);
    setWorld(newWorld);
  };
  const addToBackground = (howMuch) => {
    let newWorld = changeValue(world, "BGRed", howMuch, "add");
    newWorld = changeValue(newWorld, "BGGreen", howMuch, "add");
    newWorld = changeValue(newWorld, "BGBlue", howMuch, "add");

    setWorld(newWorld);
  };

  return (
    // JSX --controls-- --map--
    <div
      className="app"
      style={{ margin: `${appMargin}px`, backgroundColor: appMargin }}>
      <Controls
        sliders={[
          { name: "App margin (in px): ", setState: setAppMargin },
          {
            name: "Change background (grayness): ",
            setState: changeBackground,
          },
        ]}
        confirm={[
          { name: "Add grayness: ", setState: addToBackground },
        ]}></Controls>
      {/* sliders:
            name: label near your slider
            setState: function to change you value. Gives new value (0 - 100)
          confirm:
            name: label near your input
            setState: function to change you value. Gives new value
      */}
      <Map world={world}></Map>
    </div>
  );
};

export default App;
