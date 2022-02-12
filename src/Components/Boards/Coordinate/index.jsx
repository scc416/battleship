import React from "react";
import "./Coordinate.css";
import CoordinateList from "./CoordinateList";

const Coordinate = () => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<CoordinateList key={i} />);
  }
  return <div className="coordinate">{lst}</div>;
}

export default Coordinate;