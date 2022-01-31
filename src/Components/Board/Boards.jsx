import React from "react";
import Board from "./Board";
import ShipList from "./ShipList";

const Boards = () => {
  return (
    <div className="boards">
      <div class="whole-board">
        <ShipList />
        <div className="board">
          <h3>Your Board</h3>
          <Board />
        </div>
      </div>

      <div class="whole-board">
        <div className="board">
          <h3>Opponent's Board</h3>
          <Board />
        </div>
        <ShipList />
      </div>
    </div>
  );
};

export default Boards;
