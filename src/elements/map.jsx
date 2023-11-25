/** @format */

import React from "react";
import Cell from "./cell";
import "./map.css";

const Map = ({ world }) => {
  // console.log("map");

  return (
    <div className="map">
      {world.map((row, y) => {
        return (
          <div className="row" key={y}>
            {row.map((cell, x) => {
              return <Cell key={1000 * y + x} bg={cell.bg}></Cell>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Map;
