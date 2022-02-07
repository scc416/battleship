import { getCurrentTime } from "./helpers";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const RESET = "RESET";

export const initialState = {
  gameState: 0,
  messages: [{ time: getCurrentTime(), content: "Welcome to Battleship!" }],
  myShips: [
    { name: "Carrier", destroyed: true },
    { name: "Battleship", destroyed: true },
    { name: "Cruiser", destroyed: false },
    { name: "Submarine", destroyed: false },
    { name: "Destroyer", destroyed: true },
  ],
  opponentShips: [
    { name: "Carrier", destroyed: true },
    { name: "Battleship", destroyed: false },
    { name: "Cruiser", destroyed: true },
    { name: "Submarine", destroyed: false },
    { name: "Destroyer", destroyed: false },
  ],
  opponent: undefined,
  gotInitialOpponent: false,
  haveSendInitialMsg: false,
};