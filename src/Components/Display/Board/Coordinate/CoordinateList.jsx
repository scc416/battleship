import React from "react";
import CoordinateListItem from "./CoordinateListItem";
import { checkIfSameCoordinate } from "../../../../helpers";
import { ships } from "../../../../constants";

const CoordinateList = ({
  clickTile,
  row,
  placedShips,
  myBoard,
  chosenTiles,
}) => {
  const lst = [];

  for (let i = 0; i < 10; i++) {
    const coordinate = { row, column: i };

    const selected = () => {
      for (const selectCoordinated of chosenTiles) {
        const selected = checkIfSameCoordinate(selectCoordinated, coordinate);
        if (selected) return true;
      }
    };

    const confirmedClassName = () => {
      for (const index in placedShips) {
        const { coordinates } = placedShips[index];
        for (const occupiedCoordinate of coordinates) {
          const occupied = checkIfSameCoordinate(
            coordinate,
            occupiedCoordinate
          );
          if (occupied) {
            const { name } = ships[index];
            return name.toLowerCase();
          }
        }
      }
    };

    lst.push(
      <CoordinateListItem
        {...{
          selected: selected(),
          confirmedClassName: confirmedClassName(),
          key: i,
          clickHandler: () => clickTile(coordinate),
        }}
      />
    );
  }
  return <div className="row">{lst}</div>;
};

export default CoordinateList;
