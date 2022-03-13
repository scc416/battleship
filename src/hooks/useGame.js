import io from "socket.io-client";
import { useReducer, useEffect } from "react";
import {
  checkIfSameCoordinate,
  makeNewMessages,
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
      const { shipState, chosenTiles, messages } = state;
      const { name, numOfTiles } = ships[shipState];
      const numOfChosenTiles = chosenTiles.length;

      const wrongNumOfTiles = numOfTiles !== numOfChosenTiles;
      if (wrongNumOfTiles) {
      }

      return state;
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
  } = state;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });

    socket.on("opponent", (opponent) => {
      dispatch({ opponent, type: NEW_OPPONENT });
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
      default:
    }
  }, [gameState]);

  useEffect(() => {}, [shipTilesState]);

  const newGame = () => {
    dispatch({ type: NEW_GAME });
    socket.emit("newGame");
  };

  const showOpponentOverlay = gameState === 0 && "Waiting for opponents...";

  const showMyOverlay =
    (gameState === 5 && "You Won!") || (gameState === 6 && "You Lose!");

  const showConfirmCancelButtons = gameState === 1;

  const clearTiles = () => {
    dispatch({ type: CLEAR_TILES });
  };

  const clickTile = (coordinate, myBoard) => {
    switch (myBoard) {
      case true:
        if (gameState === 1) dispatch({ type: SELECT_TILE, coordinate });
        break;
      case false:
        if (gameState === 3) dispatch({ type: NEW_MESSAGE, message: "SHOOT" });
        break;
      default:
    }
  };

  const confirmTiles = () => {
    dispatch({ type: CONFIRM_TILES });
  };

  return {
    newGame,
    showOpponentOverlay,
    showMyOverlay,
    myShips,
    opponentShips,
    messages,
    showConfirmCancelButtons,
    clearTiles,
    clickTile,
    chosenTiles,
    confirmTiles,
  };
};

export default useGame;
