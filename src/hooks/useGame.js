import io from "socket.io-client";
import { useReducer, useEffect } from "react";
import { getCurrentTime } from "../helpers";

const socket = io("localhost:3001");

const NEW_OPPONENT = "NEW_OPPONENT";
const NEW_MESSAGE = "NEW_MESSAGE";
const RESET = "RESET";

const initialState = {
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

const useGame = () => {
  const reducers = {
    [NEW_OPPONENT](state, { opponent }) {
      return { ...state, gotInitialOpponent: true, opponent, state: 0 };
    },
    [NEW_MESSAGE](state, { content }) {
      const newMsg = { time: getCurrentTime(), content };
      const { messages } = state;
      console.log("NEW MSG");
      const newMessages = [...messages, newMsg];
      return { ...state, haveSendInitialMsg: true, messages: newMessages };
    },
    [RESET]() {
      console.log("rESET");
      return initialState;
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { gotInitialOpponent, opponent, haveSendInitialMsg } = state;

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
      if (opponent && !haveSendInitialMsg) {
        dispatch({
          type: NEW_MESSAGE,
          content: "Another player is already in the room. The game is on!",
        });
      }

      if (!opponent && !haveSendInitialMsg) {
        dispatch({
          type: NEW_MESSAGE,
          content:
            "There is no player in the room. Waiting for another player...",
        });
      }

      if (opponent && haveSendInitialMsg) {
        dispatch({
          type: NEW_MESSAGE,
          content: "Another player has entered the game. The game is on!",
        });
      }

      if (!opponent && haveSendInitialMsg) {
        dispatch({
          type: NEW_MESSAGE,
          content: "The other player left. Waiting for another player...",
        });
      }
    }
  }, [opponent]);

  const newGame = () => {
    dispatch({ type: RESET });
    socket.emit("newGame");
  };

  return { state, newGame };
};

export default useGame;
