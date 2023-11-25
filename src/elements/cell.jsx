/** @format */

import React from "react";
import "./cell.css";

const Cell = ({ bg, children }) => {
  // console.log("cell");

  return (
    // JSX --cell--
    <div className="cell" style={{ backgroundColor: bg }}>
      {children}
    </div>
  );
};

export default Cell;
