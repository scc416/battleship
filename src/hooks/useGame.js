import io from "socket.io-client";
import { useReducer, useEffect } from "react";
import {
  checkIfSameCoordinate,
  makeNewMessages,
  makeMsgForWrongTiles,
  validateShipTiles,
} from "../helpers";
import {
  NEW_OPPONENT,
  NEW_MESSAGE,
  NEW_GAME,
  OPPONENT_LEFT,
  initialState,
  INITIAL_MSG_NO_OPPONENT,
  INITIAL_MSG_HAVE_OPPONENT,
  MSG_HAVE_OPPONENT,
  MSG_NO_OPPONENT,
  ships,
  CLEAR_TILES,
  SELECT_TILE,
  CONFIRM_TILES,
  MSG_INVALID_TILES,
  COMPLETE_SELECTION,
  SET_OPPONENT_SHIPS,
  OPPONENTS_TURN,
} from "../constants";

const socket = io("localhost:3001");

const useGame = () => {
  const reducers = {
    [NEW_OPPONENT](state, { opponent }) {
      const newGameState = opponent ? 1 : 0;
      return {
        ...state,
        opponent,
        gotInitialOpponent: true,
        gameState: newGameState,
      };
    },
    [NEW_MESSAGE](state, { message }) {
      const { messages } = state;
      const newMessages = makeNewMessages(messages, message);
      return { ...state, haveSendInitialMsg: true, messages: newMessages };
    },
    [NEW_GAME]() {
      return initialState();
    },
    [OPPONENT_LEFT]({ messages }) {
      return { ...initialState(), messages };
    },
    [CLEAR_TILES](state) {
      return { ...state, chosenTiles: [] };
    },
    [SELECT_TILE](state, { coordinate: selectedCoordinate }) {
      const { myShips, chosenTiles } = state;
      for (const { coordinates } of myShips) {
        for (const coordinate of coordinates) {
          const isOccupied = checkIfSameCoordinate(
            selectedCoordinate,
            coordinate
          );
          if (isOccupied) return state;
        }
      }

      const tilesWithoutSelected = chosenTiles.filter(
        (coordinate) => !checkIfSameCoordinate(coordinate, selectedCoordinate)
      );

      const lengthOfNewArr = tilesWithoutSelected.length;
      const lengthOfOldArr = chosenTiles.length;

      const newChosenTiles =
        lengthOfNewArr === lengthOfOldArr
          ? chosenTiles.concat([selectedCoordinate])
          : tilesWithoutSelected;

      return {
        ...state,
        chosenTiles: newChosenTiles,
      };
    },
    [CONFIRM_TILES](state) {
      const { shipTilesState, chosenTiles, messages, myShips } = state;
      const { name, numOfTiles } = ships[shipTilesState];
      const numOfChosenTiles = chosenTiles.length;

      const wrongNumOfTiles = numOfTiles !== numOfChosenTiles;
      if (wrongNumOfTiles) {
        const newMsg = makeMsgForWrongTiles(name, numOfTiles);
        const newMessages = makeNewMessages(messages, newMsg);
        return { ...state, messages: newMessages };
      }

      const sameRow = validateShipTiles(chosenTiles, "row", "column");
      const sameColumn = validateShipTiles(chosenTiles, "column", "row");

      if (!sameRow && !sameColumn) {
        const newMessages = makeNewMessages(messages, MSG_INVALID_TILES);
        return { ...state, messages: newMessages };
      }

      const newShip = { name, coordinates: chosenTiles };
      const newMyShips = myShips.concat([newShip]);
      const newShipTilesState = shipTilesState + 1;

      return {
        ...state,
        myShips: newMyShips,
        shipTilesState: newShipTilesState,
        chosenTiles: [],
      };
    },
    [COMPLETE_SELECTION](state) {
      return { ...state, gameState: 2 };
    },
    [SET_OPPONENT_SHIPS](state, { opponentShips }) {
      const { gameState } = state;
      const newGameState = gameState === 2 ? 3 : gameState;
      return { ...state, opponentShips, gameState: newGameState };
    },
    [OPPONENTS_TURN](state) {
      return { ...state, gameState: 4 };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState());

  const {
    gotInitialOpponent,
    opponent,
    haveSendInitialMsg,
    gameState,
    myShips,
    opponentShips,
    messages,
    shipTilesState,
    chosenTiles,
    opponentShot,
    iShot,
  } = state;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });

    socket.on("opponent", (opponent) => {
      dispatch({ opponent, type: NEW_OPPONENT });
    });

    socket.on("opponentShips", (opponentShips) => {
      dispatch({ type: SET_OPPONENT_SHIPS, opponentShips });
    });

    return () => {
      socket.off("connect");
      socket.off("opponent");
    };
  }, []);

  useEffect(() => {
    if (gotInitialOpponent) {
      const message = opponent
        ? haveSendInitialMsg
          ? MSG_HAVE_OPPONENT
          : INITIAL_MSG_HAVE_OPPONENT
        : haveSendInitialMsg
        ? MSG_NO_OPPONENT
        : INITIAL_MSG_NO_OPPONENT;

      dispatch({ type: NEW_MESSAGE, message });
    }
    if (!opponent) dispatch({ type: OPPONENT_LEFT });
  }, [opponent]);

  useEffect(() => {
    switch (gameState) {
      case 1:
        const { numOfTiles, name } = ships[0];
        dispatch({
          type: NEW_MESSAGE,
          message: `Select ${numOfTiles} tiles for your ${name.toLowerCase()}.`,
        });
        break;
      case 2:
        socket.emit("ships", myShips);
        if (opponentShips) dispatch({ type: OPPONENTS_TURN });
        break;
      case 3:
        dispatch({
          type: NEW_MESSAGE,
          message: `Your turn to shoot.`,
        });
        break;
      case 4:
        dispatch({
          type: NEW_MESSAGE,
          message: `Opponent's turn to shoot.`,
        });
      default:
    }
  }, [gameState]);

  useEffect(() => {
    switch (shipTilesState) {
      case 0:
        break;
      case ships.length:
        dispatch({ type: COMPLETE_SELECTION });
        break;
      default:
        const { numOfTiles, name } = ships[shipTilesState];
        dispatch({
          type: NEW_MESSAGE,
          message: `Select ${numOfTiles} tiles for your ${name.toLowerCase()}.`,
        });
    }
  }, [shipTilesState]);

  const newGame = () => {
    dispatch({ type: NEW_GAME });
    socket.emit("newGame");
  };

  const showOpponentOverlay =
    gameState === 0
      ? "Waiting for opponents..."
      : gameState === 4
      ? "Opponent's turn to attack"
      : null;

  const showMyOverlay =
    gameState === 5
      ? "You Won!"
      : gameState === 6
      ? "You Lose!"
      : gameState === 3
      ? "Your turn to attack."
      : null;

  const showConfirmCancelButtons = gameState === 1;

  const clearTiles = () => {
    dispatch({ type: CLEAR_TILES });
  };

  const clickTile = (myBoard) => {
    if (myBoard) {
      return (coordinate) => {
        if (gameState === 1) dispatch({ type: SELECT_TILE, coordinate });
      };
    }
    return (coordinate) => {
      if (gameState === 3) dispatch({ type: NEW_MESSAGE, message: "SHOOT!" });
    };
  };

  const confirmTiles = () => {
    dispatch({ type: CONFIRM_TILES });
  };

  const logState = { messages, newGame };

  const myState = {
    myBoard: true,
    placedShips: myShips,
    overlaySettings: showMyOverlay,
    title: "Your Board",
    showConfirmCancelButtons,
    clearTiles,
    clickTile: clickTile(true),
    chosenTiles,
    confirmTiles,
    shot: opponentShot,
  };

  const opponentState = {
    placedShips: opponentShips,
    overlaySettings: showOpponentOverlay,
    title: "Opponent's Board",
    clickTile: clickTile(),
    chosenTiles: [],
    shot: iShot,
  };

  return { logState, myState, opponentState };
};

export default useGame;
