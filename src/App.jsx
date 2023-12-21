/** @format */

import "./App.css";
import React, { useRef, useState } from "react";
import Map from "./elements/map";
import Controls from "./elements/controls";
import { rerenderMap, fillRandomly } from "./functions/rerenderMap";
import { grayToReal } from "./functions/convertMapColors";

// Consts
const SIZEX = 64,
  SIZEY = 64;

// Default functions

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
    if (how == "replace") newObj[whatChange] += withWhat;
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
  const [world, setWorld] = useState(fillRandomly(SIZEX, SIZEY));

  // Refs
  const weights = useRef([1, 1, 1, 1]);
  const offset = useRef([0, 1, 0, 2]);
  const deepness = useRef([1, 2, 4, 8]);
  const colorBorders = useRef([200, 100, 50]);

  // Help funcitons:
  const addToBackground = (howMuch) => {
    let newWorld = changeValue(world, "BGRed", howMuch, "add");
    newWorld = changeValue(newWorld, "BGGreen", howMuch, "add");
    newWorld = changeValue(newWorld, "BGBlue", howMuch, "add");

    setWorld(newWorld);
  };
  const rerenderAlg = () => {
    setWorld(
      rerenderMap(
        world,
        SIZEX,
        SIZEY,
        weights.current,
        offset.current,
        deepness.current
      )
    );
  };
  const changeWeight = (what, how) => {
    weights.current[what] = +how;
  };
  const changeOffset = (what, how) => {
    offset.current[what] = +how;
  };
  const grayToWGB = () => {
    setWorld(grayToReal(world, SIZEX, SIZEY, colorBorders.current));
  };
  const changeBorder = (what, how) => {
    colorBorders.current[what] = Number(how);
  };

  const rerenderRand = () => {
    setWorld(fillRandomly(SIZEX, SIZEY, world));
  };

  return (
    // JSX --controls-- --map--
    <div className="app">
      <Controls
        sliders={[
          {
            name: "Weight 1: ",
            setState: (how) => {
              changeWeight(0, how);
            },
          },
          {
            name: "Weight 2: ",
            setState: (how) => {
              changeWeight(1, how);
            },
          },
          {
            name: "Weight 4: ",
            setState: (how) => {
              changeWeight(2, how);
            },
          },
          {
            name: "Weight 8: ",
            setState: (how) => {
              changeWeight(3, how);
            },
          },
          {
            name: "Offset 1: ",
            setState: (how) => {
              changeOffset(0, how);
            },
          },
          {
            name: "Offset 2: ",
            setState: (how) => {
              changeOffset(1, how);
            },
          },
          {
            name: "Offset 4: ",
            setState: (how) => {
              changeOffset(2, how);
            },
          },
          {
            name: "Offset 8: ",
            setState: (how) => {
              changeOffset(3, how);
            },
          },
          {
            name: "Color Border 1: ",
            setState: (how) => {
              changeBorder(0, +how);
            },
          },
          {
            name: "Color Border 2: ",
            setState: (how) => {
              changeBorder(1, +how);
            },
          },
          {
            name: "Color Border 3: ",
            setState: (how) => {
              changeBorder(2, +how);
            },
          },
        ]}
        confirm={[
          { name: "Add grayness: ", setState: addToBackground },
          { name: "Re-render with algorithm: ", setState: rerenderAlg },
          { name: "Re-render randomly: ", setState: rerenderRand },
          { name: "Gray scale to white green blue: ", setState: grayToWGB },
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
