import React from "react";
import Board from "./Board/";
import "./Display.css";

const Display = ({ myShips, opponentShips, showOpponentOverlay }) => {
  return (
    <div className="display">
      <Board
        {...{
          myBoard: true,
          ships: myShips,
          overlaySettings: { show: false },
          title: "Your Board",
        }}
      />

      <Board
        {...{
          myBoard: false,
          ships: opponentShips,
          overlaySettings: showOpponentOverlay,
          title: "Opponent's Board",
        }}
      />
    </div>
  );
};

export default Display;
