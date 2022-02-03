import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("localhost:3001");

const useGame = () => {
  const [state, setState] = useState(0);
  const [messages, setMessages] = useState([]);
  const [myShips, setMyShips] = useState([]);
  const [opponentShips, setOpponentShips] = useState([]);
  const [opponent, setOpponent] = useState(null);
  // , myShips, opponentShips]

  useEffect(() => {
    if (opponent) {
      setMessages((prev) => [
        ...prev,
        { time: 1, content: "You opponent is in the room." },
      ]);
    }

    if (!opponent) {
      setMessages((prev) => [
        ...prev,
        { time: 1, content: "Waiting for another player..." },
      ]);
    }
  }, [opponent]);

  useEffect(() => {
    socket.on("connect", (opponent) => {
      console.log("connected");
    });

    socket.on("opponent", (data) => {
      setOpponent(data);
      console.log("OPPONENT RECEIVED", data);
    });

    setMessages([
      { time: "2", content: "hello" },
      { time: "3", content: "hello" },
      { time: "4", content: "hello" },
      { time: "5", content: "hello" },
      { time: "6", content: "hello" },
    ]);

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
