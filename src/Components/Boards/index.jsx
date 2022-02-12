import React from "react";
import Board from "./Board";
import ShipList from "./ShipList";

const Boards = ({ myShips, opponentShips, showOpponentOverlay }) => {
  return (
    <div className="boards">
      <div className="whole-board">
        <ShipList ships={myShips} />
        <div className="board">
          <h3>Your Board</h3>
          <Board />
        </div>
        <div className="overlay"></div>
      </div>

      <div className="whole-board">
        <div className="board">
          <h3>Opponent's Board</h3>
          <Board />
        </div>
        <ShipList ships={opponentShips} />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Boards;
