/** @format */

import "./App.css";
import React, { useState } from "react";
import Map from "./elements/map";

const SIZEX = 100,
  SIZEY = 100;

const buildDefaultWorld = () => {
  const defaultWorld = [[]];
  for (let i = 0; i < SIZEY; i++) {
    defaultWorld[i] = [];
    for (let k = 0; k < SIZEX; k++) {
      defaultWorld[i][k] = { bg: "#ffffff" }; // you can use "rgb(r,b,g)" here
    }
  }
  return defaultWorld;
};

const App = () => {
  // console.log("App");

  const [world, setWorld] = useState(buildDefaultWorld);

  return (
    <div className="app">
      {/* controls */}
      <Map world={world}></Map>
    </div>
  );
};

export default App;
