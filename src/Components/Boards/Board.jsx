import React from "react";
import "./Board.css";
import BoardList from "./BoardList";

const Board = () => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<BoardList key={i} />);
  }
  return <div className="game-board">{lst}</div>;
}

export default Board;