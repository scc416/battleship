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
        <div className="coordinate-label"></div>
        <div style={{ display: "flex" }}>
          <div className="coordinate-label">A</div>
          <div className="coordinate-label">B</div>
          <div className="coordinate-label">C</div>
          <div className="coordinate-label">D</div>
          <div className="coordinate-label">E</div>
          <div className="coordinate-label">F</div>
          <div className="coordinate-label">G</div>
          <div className="coordinate-label">H</div>
          <div className="coordinate-label">I</div>
          <div className="coordinate-label">J</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <div className="coordinate-label">1</div>
          <div className="coordinate-label">2</div>
          <div className="coordinate-label">3</div>
          <div className="coordinate-label">4</div>
          <div className="coordinate-label">5</div>
          <div className="coordinate-label">6</div>
          <div className="coordinate-label">7</div>
          <div className="coordinate-label">8</div>
          <div className="coordinate-label">9</div>
          <div className="coordinate-label">10</div>
        </div>
        <div className="coordinate">{lst}</div>
      </div>
    </>
  );
};

export default Coordinate;
