import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("localhost:3001");

const useGame = () => {
  const [state, setState] = useState(0);
  const [messages, setMessages] = useState([
    { time: Math.random(), content: "Welcome to Battleship!" },
  ]);
  const [myShips, setMyShips] = useState([]);
  const [opponentShips, setOpponentShips] = useState([]);
  const [opponent, setOpponent] = useState(undefined);
  const [gotInitialOpponent, setGotInitialOpponent] = useState(false);
  const [haveSendInitialMsg, setHaveSendInitialMsg] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("opponent", (data) => {
      if (!gotInitialOpponent) setGotInitialOpponent(true);
      setOpponent(data);
    });

    setMyShips([
      { name: "Carrier", destroyed: true },
      { name: "Battleship", destroyed: true },
      { name: "Cruiser", destroyed: false },
      { name: "Submarine", destroyed: false },
      { name: "Destroyer", destroyed: true },
    ]);

    setOpponentShips([
      { name: "Carrier", destroyed: true },
      { name: "Battleship", destroyed: false },
      { name: "Cruiser", destroyed: true },
      { name: "Submarine", destroyed: false },
      { name: "Destroyer", destroyed: false },
    ]);

    // socket.on("disconnect", () => {
    //   setIsConnected(false);
    // });
    // socket.on("message", (data) => {
    //   setLastMessage(data);
    // });
    return () => {
      socket.off("connect");
      // socket.off("disconnect");
      // socket.off("message");
    };
  }, []);

  useEffect(() => {
    if (gotInitialOpponent) {
      if (opponent && !haveSendInitialMsg) {
        setMessages((prev) => [
          ...prev,
          {
            time: Math.random(),
            content: "Another player is already in the room. The game is on!",
          },
        ]);
      }

      if (!opponent && !haveSendInitialMsg) {
        setMessages((prev) => [
          ...prev,
          {
            time: Math.random(),
            content:
              "There is no player in the room. Waiting for another player...",
          },
        ]);
      }

      if (opponent && haveSendInitialMsg) {
        setMessages((prev) => [
          ...prev,
          {
            time: Math.random(),
            content: "Another player has entered the game. The game is on!",
          },
        ]);
      }

      if (!opponent && haveSendInitialMsg) {
        setMessages((prev) => [
          ...prev,
          {
            time: Math.random(),
            content: "The other player left. Waiting for another player...",
          },
        ]);
      }

      if (!haveSendInitialMsg) setHaveSendInitialMsg(true);
    }
  }, [opponent]);

  const newGame = () => {
    socket.emit("newGame");
    setMessages([{ time: 0, content: "Welcome to Battleship!" }]);
    setState(0);
  };
  // const sendMessage = () => {
  //   socket.emit("hello!");
  // };

  return { state, messages, myShips, opponentShips, newGame };
};

export default useGame;
