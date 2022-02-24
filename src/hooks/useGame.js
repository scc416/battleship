import io from "socket.io-client";
import { useReducer, useEffect } from "react";
import { getCurrentTime } from "../helpers";
import {
  NEW_OPPONENT,
  NEW_MESSAGE,
  RESET,
  initialState,
  INITIAL_MSG_NO_OPPONENT,
  INITIAL_MSG_HAVE_OPPONENT,
  MSG_HAVE_OPPONENT,
  MSG_NO_OPPONENT,
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
    [NEW_MESSAGE](state, { content }) {
      const newMsg = { content, time: getCurrentTime() };
      const { messages } = state;
      const newMessages = messages.concat([newMsg]);
      return { ...state, haveSendInitialMsg: true, messages: newMessages };
    },
    [RESET]() {
      return initialState();
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
      const content = opponent
        ? haveSendInitialMsg
          ? MSG_HAVE_OPPONENT
          : INITIAL_MSG_HAVE_OPPONENT
        : haveSendInitialMsg
        ? MSG_NO_OPPONENT
        : INITIAL_MSG_NO_OPPONENT;

      dispatch({ type: NEW_MESSAGE, content: content });
    }
  }, [opponent]);

  const newGame = () => {
    dispatch({ type: RESET });
    socket.emit("newGame");
  };

  const showOpponentOverlay = gameState === 0 && "Waiting for opponents...";

  const showMyOverlay =
    (gameState === 5 && "You Won!") || (gameState === 6 && "You Lose!");

  return {
    newGame,
    showOpponentOverlay,
    showMyOverlay,
    myShips,
    opponentShips,
    messages,
  };
};

export default useGame;
