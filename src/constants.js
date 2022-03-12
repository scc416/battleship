import { getCurrentTime } from "./helpers";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const RESET = "RESET";

export const INITIAL_MSG_NO_OPPONENT =
  "There is no player in the room. Waiting for another player...";
export const INITIAL_MSG_HAVE_OPPONENT =
  "Another player is already in the room. The game is on!";
export const MSG_HAVE_OPPONENT =
  "Another player has entered the game. The game is on!";
export const MSG_NO_OPPONENT =
  "The other player left. Waiting for another player...";

export const ships = [
  { name: "Carrier", numOfTiles: 5 },
  { name: "Battleship", numOfTiles: 4 },
  { name: "Cruiser", numOfTiles: 3 },
  { name: "Submarine", numOfTiles: 3 },
  { name: "Destroyer", numOfTiles: 2 },
];

export const initialState = () => {
  return {
    gameState: 0,
    messages: [{ time: getCurrentTime(), message: "Welcome to Battleship!" }],
    myShips: [
      // { name: "Carrier", coordinates: [] },
      // { name: "Battleship", coordinates: [] },
      // { name: "Cruiser", coordinates: [] },
      // { name: "Submarine", coordinates: [] },
      // { name: "Destroyer", coordinates: [] },
    ],
    iShot: [],
    opponentShips: [
      // { name: "Carrier", coordinates: [] },
      // { name: "Battleship", coordinates: [] },
      // { name: "Cruiser", coordinates: [] },
      // { name: "Submarine", coordinates: [] },
      // { name: "Destroyer", coordinates: [] },
    ],
    opponentShot: [],
    opponent: undefined,
    gotInitialOpponent: false,
    haveSendInitialMsg: false,
  };
};
