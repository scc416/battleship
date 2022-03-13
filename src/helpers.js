import moment from "moment";
import { MISSED } from "./constants";

export const getCurrentTime = () => moment().format("LTS");

export const checkIfSameCoordinate = (
  { row: row1, column: column1 },
  { row: row2, column: column2 }
) => {
  const sameRow = row1 === row2;
  const sameColumn = column1 === column2;
  return sameRow && sameColumn;
};

export const checkIfLstIncludesCoordinate = (
  coordinates,
  checkedCoordinate
) => {
  for (const coordinate of coordinates) {
    const coordinateFound = checkIfSameCoordinate(
      coordinate,
      checkedCoordinate
    );
    if (coordinateFound) return true;
  }
};

export const isWinner = (ships, shot) => {
  for (const { coordinates } of ships) {
    for (const coordinate of coordinates) {
      const isHit = checkIfLstIncludesCoordinate(shot, coordinate);
      if (!isHit) return;
    }
  }
  return true;
};

export const whichShipCoordinateIsBelong = (ships, checkCoordinate) => {
  for (const index in ships) {
    const { coordinates, name } = ships[index];
    const isOccupied = checkIfLstIncludesCoordinate(
      coordinates,
      checkCoordinate
    );
    if (isOccupied) return name.toLowerCase();
  }
};

export const makeNewMessages = (messages, message) => {
  const newMsg = { message, time: getCurrentTime() };
  const newMessages = messages.concat([newMsg]);
  return newMessages;
};

export const makeMsgForWrongTiles = (name, numOfTiles) => {
  return `Wrong number of tiles. A ${name.toLowerCase()} has ${numOfTiles} tiles. Try again.`;
};

export const makeMsgForSelectingTiles = (name, numOfTiles) => {
  return `Select ${numOfTiles} tiles for your ${name.toLowerCase()}.`;
};

export const validateShipTiles = (chosenTiles, var1, var2) => {
  const lst = [];
  const { [var1]: num } = chosenTiles[0];
  for (const { [var1]: val3, [var2]: val4 } of chosenTiles) {
    if (val3 !== num) return;
    lst.push(val4);
  }

  const orderedLst = lst.sort();
  for (let i = 0; i < orderedLst.length - 1; i++) {
    if (orderedLst[i] + 1 !== orderedLst[i + 1]) return;
  }
  return true;
};
