import io from "socket.io-client";
import { useState, useEffect } from "react";

const useGame = () => {
  const socket = io("localhost:3001");
  const [state, setState] = useState(0);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
    });

    // socket.on("disconnect", () => {
    //   setIsConnected(false);
    // });
    // socket.on("message", (data) => {
    //   setLastMessage(data);
    // });
    return () => {
      socket.off("connect");
      socket.emit("disconnect");
      // socket.off("disconnect");
      // socket.off("message");
    };
  });

  const messages = [
    { time: "1", content: "hello" },
    { time: "2", content: "hello" },
    { time: "3", content: "hello" },
    { time: "4", content: "hello" },
    { time: "5", content: "hello" },
    { time: "6", content: "hello" },
  ];

  const myShips = [
    { name: "Carrier", destroyed: true },
    { name: "Battleship", destroyed: true },
    { name: "Cruiser", destroyed: false },
    { name: "Submarine", destroyed: false },
    { name: "Destroyer", destroyed: true },
  ];

  const opponentShips = [
    { name: "Carrier", destroyed: true },
    { name: "Battleship", destroyed: false },
    { name: "Cruiser", destroyed: true },
    { name: "Submarine", destroyed: false },
    { name: "Destroyer", destroyed: false },
  ];

  // const sendMessage = () => {
  //   socket.emit("hello!");
  // };

  return { socket, messages, myShips, opponentShips };
};

export default useGame;
