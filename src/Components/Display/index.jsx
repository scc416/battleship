import React from "react";
import Board from "./Board/";
import "./Display.css";

const Display = ({ myState, opponentState }) => {
  return (
    <div className="display">
      <Board state={myState} />
      <Board state={opponentState} />
    </div>
  );
};

export default Display;
