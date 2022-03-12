import React from "react";
import Coordinate from "./Coordinate";
import ShipList from "./ShipList";
import Overlay from "./Overlay";
import "./Board.css"

const Board = ({ myBoard, ships, overlaySettings, title }) => {
  const coordinate = (
    <div className="board">
      <h3>{title}</h3>
      <Coordinate {...{ships, myBoard}} />
    </div>
  );

  const shipList = <ShipList ships={ships} />;

  const board = myBoard ? (
    <>
      {shipList}
      {coordinate}
    </>
  ) : (
    <>
      {coordinate}
      {shipList}
    </>
  );

  return (
    <div className="whole-board">
      {board}
      <Overlay settings={overlaySettings} />
    </div>
  );
};

export default Board;
