import React from "react";
import "./Coordinate.css";
import CoordinateList from "./CoordinateList";
import CoordinateLabelList from "./CoordinateLabelList";

const Coordinate = ({ placedShips, clickTile, chosenTiles, shot, myBoard }) => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(
      <CoordinateList
        {...{
          key: i,
          clickTile,
          row: i,
          placedShips,
          chosenTiles,
          shot,
          myBoard,
        }}
      />
    );
  }

  return (
    <>
      <div className="row-column">
        <div className="coordinate-space"></div>
        <CoordinateLabelList />
      </div>
      <div className="row-column">
        <CoordinateLabelList isRow={true} />
        <div className="coordinate">{lst}</div>
      </div>
    </>
  );
};

export default Coordinate;
