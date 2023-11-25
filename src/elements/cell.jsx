/** @format */

import React from "react";
import "./cell.css";

const Cell = ({ bg, children }) => {
  // console.log("cell");

  return (
    <div className="cell" style={{ backgroundColor: bg }}>
      {children}
    </div>
  );
};

export default Cell;
