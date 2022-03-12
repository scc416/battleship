import React from "react";
import CoordinateListItem from "./CoordinateListItem";

const CoordinateList = ({ clickTile, row, ships, myBoard }) => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(
      <CoordinateListItem
        key={i}
        clickHandler={() => clickTile({ column: i, row }, myBoard)}
      />
    );
  }
  return <div className="row">{lst}</div>;
};

export default CoordinateList;
