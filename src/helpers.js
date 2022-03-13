import moment from "moment";

export const getCurrentTime = () => moment().format("LTS");

export const checkIfSameCoordinate = (
  { row: row1, column: column1 },
  { row: row2, column: column2 }
) => {
  const sameRow = row1 === row2;
  const sameColumn = column1 === column2;
  return sameRow && sameColumn;
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
