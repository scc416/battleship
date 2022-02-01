import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("localhost:3001");

const useGame = () => {
  const [state, setState] = useState(0);
  const [messages, setMessages] = useState([]);
  const [myShips, setMyShips] = useState([]);
  const [opponentShips, setOpponentShips] = useState([]);
  // , myShips, opponentShips]

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
    });

    setMessages([
      { time: "1", content: "hello" },
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

  // const sendMessage = () => {
  //   socket.emit("hello!");
  // };

  return { state, messages, myShips, opponentShips };
};

export default useGame;
