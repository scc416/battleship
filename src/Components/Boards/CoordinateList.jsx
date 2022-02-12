import React from "react";
import CoordinateListItem from "./CoordinateListItem";

const CoordinateList = () => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(<CoordinateListItem key={i} />);
  }
  return <div className="row">{lst}</div>;
};

export default CoordinateList;
