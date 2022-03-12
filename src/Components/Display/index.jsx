import React from "react";
import Board from "./Board/";
import "./Display.css";

const Display = ({
  myShips,
  opponentShips,
  showOpponentOverlay,
  showMyOverlay,
  showConfirmCancelButtons,
  clearTiles
}) => {
  return (
    <div className="display">
      <Board
        {...{
          myBoard: true,
          ships: myShips,
          overlaySettings: showMyOverlay,
          title: "Your Board",
          showConfirmCancelButtons,
          clearTiles
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
