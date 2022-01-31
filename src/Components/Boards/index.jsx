import React from "react";
import Board from "./Board";
import ShipList from "./ShipList";

const Boards = () => {
  return (
    <div className="boards">
      <div class="whole-board">
        <ShipList
          ships={[
            { name: "Carrier", destroyed: true },
            { name: "Battleship", destroyed: true },
            { name: "Cruiser", destroyed: false },
            { name: "Submarine", destroyed: false },
            { name: "Destroyer", destroyed: true },
          ]}
        />
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
        <ShipList
          ships={[
            { name: "Carrier", destroyed: true },
            { name: "Battleship", destroyed: false },
            { name: "Cruiser", destroyed: true },
            { name: "Submarine", destroyed: false },
            { name: "Destroyer", destroyed: false },
          ]}
        />
      </div>
    </div>
  );
};

export default Boards;
