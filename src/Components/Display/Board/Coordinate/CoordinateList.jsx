import React from "react";
import CoordinateListItem from "./CoordinateListItem";
import {
  checkIfSameCoordinate,
  checkIfLstIncludesCoordinate,
  whichShipCoordinateIsBelong,
  findSinkShipNameOfCoordinate,
} from "../../../../helpers";
import { MISSED, SELECTED, CONFIRMED, HIT } from "../../../../constants";

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
      const isShot = checkIfLstIncludesCoordinate(shot, coordinate);
      if (isShot) {
        const shipName = whichShipCoordinateIsBelong(placedShips, coordinate);
        if (shipName) {
          const isSink = findSinkShipNameOfCoordinate(
            placedShips,
            coordinate,
            shot
          );
          if (isSink) return { type: HIT, shipName };
          return { type: HIT, shipName: myBoard && shipName };
        }
        return { type: MISSED };
      }

      for (const selectCoordinate of chosenTiles) {
        const selected = checkIfSameCoordinate(selectCoordinate, coordinate);
        if (selected) return { type: SELECTED };
      }

      if (myBoard) {
        const shipName = whichShipCoordinateIsBelong(placedShips, coordinate);
        if (shipName) return { type: CONFIRMED, shipName };
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
