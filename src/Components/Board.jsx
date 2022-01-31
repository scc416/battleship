import React from "react";
import "./Board.css";
import BoardList from "./BoardList";

const Board = () => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<BoardList key={i} />);
  }
  return lst;
}

export default Board;