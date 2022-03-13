import React from "react";
import Board from "./Board/";
import "./Display.css";

const Display = ({ myBoardState, opponentState }) => {
  return (
    <div className="display">
      <Board {...myBoardState} />
      <Board {...opponentState} />
    </div>
  );
};

export default Display;
