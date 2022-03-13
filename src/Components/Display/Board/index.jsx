import React from "react";
import Coordinate from "./Coordinate";
import ShipList from "./ShipList";
import Overlay from "./Overlay";
import "./Board.css";

const Board = ({ state }) => {
  const {
    myBoard,
    placedShips,
    overlaySettings,
    title,
    showConfirmCancelButtons,
    clearTiles,
    clickTile,
    chosenTiles,
    confirmTiles,
    shot,
  } = state;

  const coordinate = (
    <div className="board">
      <h3>{title}</h3>
      <Coordinate {...{ placedShips, clickTile, chosenTiles, shot, myBoard }} />
    </div>
  );

  const shipList = (
    <ShipList
      {...{
        placedShips,
        showConfirmCancelButtons,
        clearTiles,
        confirmTiles,
        shot,
      }}
    />
  );

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
