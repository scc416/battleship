import React from "react";
import Coordinate from "./Coordinate";
import ShipList from "./ShipList";
import "./Display.css"

const Display = ({ myShips, opponentShips, showOpponentOverlay }) => {
  return (
    <div className="display">
      <div className="whole-board">
        <ShipList ships={myShips} />
        <div className="board">
          <h3>Your Board</h3>
          <Coordinate />
        </div>
        <div className="overlay"></div>
      </div>

      <div className="whole-board">
        <div className="board">
          <h3>Opponent's Board</h3>
          <Coordinate />
        </div>
        <ShipList ships={opponentShips} />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Display;
