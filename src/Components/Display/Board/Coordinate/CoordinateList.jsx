import React from "react";
import CoordinateListItem from "./CoordinateListItem";
import { checkIfSameCoordinate } from "../../../../helpers";
import { ships, MISSED, SELECTED, CONFIRMED, HIT } from "../../../../constants";

const CoordinateList = ({
  clickTile,
  row,
  placedShips,
  chosenTiles,
  shot,
  myBoard,
}) => {
  const lst = [];

  for (let i = 0; i < 10; i++) {
    const coordinate = { row, column: i };
    const state = () => {
      for (const selectCoordinate of chosenTiles) {
        const selected = checkIfSameCoordinate(selectCoordinate, coordinate);
        if (selected) return { type: SELECTED };
      }

      if (myBoard) {
        for (const index in placedShips) {
          const { coordinates } = placedShips[index];
          for (const occupiedCoordinate of coordinates) {
            const occupied = checkIfSameCoordinate(
              coordinate,
              occupiedCoordinate
            );
            if (occupied) {
              const { name } = ships[index];
              return { type: CONFIRMED, shipName: name.toLowerCase() };
            }
          }
        }
      }

      return { type: null };
    };

    // const confirmedClassName = () => {

    // };

    lst.push(
      <CoordinateListItem
        {...{
          state: state(),
          key: i,
          clickHandler: () => clickTile(coordinate),
        }}
      />
    );
  }
  return <div className="row">{lst}</div>;
};

export default CoordinateList;
