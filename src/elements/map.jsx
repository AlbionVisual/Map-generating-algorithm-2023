/** @format */

import React from "react";
import Cell from "./cell";
import "./map.css";

const Map = ({ world }) => {
  // console.log("map");

  return (
    // JSX (--row--: (--cell-- [[row]]) [[world]])
    <div className="map">
      {world.map((row, y) => {
        return (
          <div className="row" key={y}>
            {row.map((cell, x) => {
              return (
                <Cell
                  key={1000 * y + x}
                  bg={`rgb(${cell.BGRed},${cell.BGGreen},${cell.BGBlue})`}></Cell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Map;
