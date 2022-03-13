import React from "react";
import CoordinateListItem from "./CoordinateListItem";
import { checkIfSameCoordinate } from "../../../../helpers";

const CoordinateList = ({ clickTile, row, ships, myBoard, chosenTiles }) => {
  const lst = [];

  for (let i = 0; i < 10; i++) {
    const coordinate = { row, column: i };

    const selected = () => {
      for (const selectCoordinated of chosenTiles) {
        const selected = checkIfSameCoordinate(selectCoordinated, coordinate);
        if (selected) return true;
      }
    };

    lst.push(
      <CoordinateListItem
        {...{
          selected: selected(),
          key: i,
          clickHandler: () => clickTile(coordinate, myBoard),
        }}
      />
    );
  }
  return <div className="row">{lst}</div>;
};

export default CoordinateList;
