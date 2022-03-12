import { getCurrentTime } from "./helpers";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const RESET = "RESET";

export const INITIAL_MSG_NO_OPPONENT = "There is no player in the room. Waiting for another player...";
export const INITIAL_MSG_HAVE_OPPONENT = "Another player is already in the room. The game is on!";
export const MSG_HAVE_OPPONENT = "Another player has entered the game. The game is on!";
export const MSG_NO_OPPONENT = "The other player left. Waiting for another player...";

export const initialState = () => {
  return {
    gameState: 0,
    messages: [{ time: getCurrentTime(), message: "Welcome to Battleship!" }],
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
};
