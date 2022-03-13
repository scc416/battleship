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
