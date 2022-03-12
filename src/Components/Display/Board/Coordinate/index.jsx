import React from "react";
import "./Coordinate.css";
import CoordinateList from "./CoordinateList";

const Coordinate = ({ ships, myBoard, clickTile }) => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<CoordinateList {...{ key: i, clickTile, row: i, ships, myBoard }} />);
  }
  return <div className="coordinate">{lst}</div>;
};

export default Coordinate;
