import { getCurrentTime } from "./helpers";

export const columnLabel = "ABCDEFGHIJ";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const OPPONENT_LEFT = "OPPONENT_LEFT";
export const NEW_GAME = "NEW_GAME";
export const CLEAR_TILES = "CLEAR_TILES";
export const SELECT_TILE = "SELECT_TILE";
export const CONFIRM_TILES = "CONFIRM_TILES";
export const COMPLETE_SELECTION = "COMPLETE_SELECTION";
export const SET_OPPONENT_SHIPS = "SET_OPPONENT_SHIPS";
export const OPPONENTS_TURN = "OPPONENTS_TURN";
export const SHOT = "SHOT";
export const OPPONENT_SHOT = "OPPONENT_SHOT";
export const END = "END";

export const MISSED = "MISSED";
export const SELECTED = "SELECTED";
export const CONFIRMED = "CONFIRMED";
export const HIT = "HIT";

export const INITIAL_MSG_NO_OPPONENT =
  "There is no player in the room. Waiting for another player...";
export const INITIAL_MSG_HAVE_OPPONENT =
  "Another player is already in the room. The game is on!";
export const MSG_HAVE_OPPONENT =
  "Another player has entered the game. The game is on!";
export const MSG_NO_OPPONENT =
  "The other player left. Waiting for another player...";
export const MSG_INVALID_TILES =
  "All tiles have to be connected (either horizontally or vertically).";
export const MSG_ATTACK = "Your turn to attack.";
export const MSG_DEFEND = "Opponent's turn to attack.";
export const MSG_WAITING_FOR_PLAYER = "Waiting for player to join...";
export const MSG_WIN = "You Won!";
export const MSG_LOSE = "You Lose.";
export const MSG_OPPONENT_PLACING_SHIPS = "Opponent is placing ships...";
export const MSG_ENTER_NEW_GAME = "[NEW GAME] You have entered a new game.";

export const ships = [
  { name: "Carrier", numOfTiles: 5 },
  { name: "Battleship", numOfTiles: 4 },
  { name: "Cruiser", numOfTiles: 3 },
  { name: "Submarine", numOfTiles: 3 },
  { name: "Destroyer", numOfTiles: 2 },
];

// initial state used in the hook useGame
export const initialState = () => {
  return {
    gameState: 0,
    shipTilesState: 0,
    messages: [{ time: getCurrentTime(), message: "Welcome to Battleship!" }],
    myShips: [],
    myShipsShot: [],
    opponentShips: null,
    chosenTiles: [],
    opponentShipsShot: [],
    opponent: undefined,
    gotInitialOpponent: false,
    haveSendInitialMsg: false,
  };
};
