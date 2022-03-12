import io from "socket.io-client";
import { useReducer, useEffect } from "react";
import { getCurrentTime, checkIfSameCoordinate } from "../helpers";
import {
  NEW_OPPONENT,
  NEW_MESSAGE,
  RESET,
  initialState,
  INITIAL_MSG_NO_OPPONENT,
  INITIAL_MSG_HAVE_OPPONENT,
  MSG_HAVE_OPPONENT,
  MSG_NO_OPPONENT,
  ships,
  CLEAR_TILES,
  SELECT_TILE,
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
      const newMsg = { message, time: getCurrentTime() };
      const { messages } = state;
      const newMessages = messages.concat([newMsg]);
      return { ...state, haveSendInitialMsg: true, messages: newMessages };
    },
    [RESET]() {
      return initialState();
    },
    [CLEAR_TILES](state) {
      return { ...state, chosenTiles: [] };
    },
    [SELECT_TILE](state, { coordinate: selectCoordinate }) {
      const { myShips, chosenTiles } = state;
      for (const { coordinates } of myShips) {
        for (const coordinate of coordinates) {
          const isOccupied = checkIfSameCoordinate(
            selectCoordinate,
            coordinate
          );
          if (isOccupied) return state;
        }
      }

      for (const index in chosenTiles) {
        const coordinate = chosenTiles[index];
        const isSelected = checkIfSameCoordinate(selectCoordinate, coordinate);
        if (isSelected) {
          const newchosenTiles = chosenTiles
            .slice(0, index)
            .concat(chosenTiles.slice(index + 1));
          return { ...state, chosenTiles: newchosenTiles };
        }
      }

      return { ...state, chosenTiles: chosenTiles.concat([selectCoordinate]) };
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
  }, [opponent]);

  useEffect(() => {
    switch (gameState) {
      case 1:
        const { numOfTiles, name } = ships[0];
        dispatch({
          type: NEW_MESSAGE,
          message: `Pick ${numOfTiles} tiles for ${name}.`,
        });
        break;
      default:
        dispatch({ type: NEW_MESSAGE, message: `current stage: ${gameState}` });
    }
  }, [gameState]);

  useEffect(() => {}, [shipTilesState]);

  const newGame = () => {
    dispatch({ type: RESET });
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
    }
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
    chosenTiles
  };
};

export default useGame;
