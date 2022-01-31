import React from "react";
import BoardListItem from "./BoardListItem";

const BoardList = () => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<BoardListItem key={i} />);
  }
  return <div className="row">{lst}</div>;
};

export default BoardList;
