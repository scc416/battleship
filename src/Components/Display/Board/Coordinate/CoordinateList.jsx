import React from "react";
import CoordinateListItem from "./CoordinateListItem";
import {
  checkIfSameCoordinate,
  lstIncludesCoordinate,
} from "../../../../helpers";
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
      const isShot = lstIncludesCoordinate(shot, coordinate);
      if (isShot) {
        return { type: MISSED };
      }

      for (const selectCoordinate of chosenTiles) {
        const selected = checkIfSameCoordinate(selectCoordinate, coordinate);
        if (selected) return { type: SELECTED };
      }

      if (myBoard) {
        for (const index in placedShips) {
          const { coordinates } = placedShips[index];
          const isOccupied = lstIncludesCoordinate(coordinates, coordinate);
          if (isOccupied) {
            const { name } = ships[index];
            return { type: CONFIRMED, shipName: name.toLowerCase() };
          }
        }
      }

      return { type: null };
    };

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
