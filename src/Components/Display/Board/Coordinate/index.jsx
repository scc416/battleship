import React from "react";
import "./Coordinate.css";
import CoordinateList from "./CoordinateList";

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
      <div style={{ display: "flex" }}>
        <div className="coordinate-space"></div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div className="coordinate-label-column">A</div>
          <div className="coordinate-label-column">B</div>
          <div className="coordinate-label-column">C</div>
          <div className="coordinate-label-column">D</div>
          <div className="coordinate-label-column">E</div>
          <div className="coordinate-label-column">F</div>
          <div className="coordinate-label-column">G</div>
          <div className="coordinate-label-column">H</div>
          <div className="coordinate-label-column">I</div>
          <div className="coordinate-label-column">J</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <div className="coordinate-label-row">1</div>
          <div className="coordinate-label-row">2</div>
          <div className="coordinate-label-row">3</div>
          <div className="coordinate-label-row">4</div>
          <div className="coordinate-label-row">5</div>
          <div className="coordinate-label-row">6</div>
          <div className="coordinate-label-row">7</div>
          <div className="coordinate-label-row">8</div>
          <div className="coordinate-label-row">9</div>
          <div className="coordinate-label-row">10</div>
        </div>
        <div className="coordinate">{lst}</div>
      </div>
    </>
  );
};

export default Coordinate;
