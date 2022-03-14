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
        <div className="index"></div>
        <div style={{ display: "flex" }}>
          <div className="index">A</div>
          <div className="index">B</div>
          <div className="index">C</div>
          <div className="index">D</div>
          <div className="index">E</div>
          <div className="index">F</div>
          <div className="index">G</div>
          <div className="index">H</div>
          <div className="index">I</div>
          <div className="index">J</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <div className="index">1</div>
          <div className="index">2</div>
          <div className="index">3</div>
          <div className="index">4</div>
          <div className="index">5</div>
          <div className="index">6</div>
          <div className="index">7</div>
          <div className="index">8</div>
          <div className="index">9</div>
          <div className="index">10</div>
        </div>
        <div className="coordinate">{lst}</div>
      </div>
    </>
  );
};

export default Coordinate;
