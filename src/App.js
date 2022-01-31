import React from "react";
import "./App.css";
import io from "socket.io-client";
import Board from "./Components/Board";

const socket = io("localhost:3001");

const App = () => {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastMessage, setLastMessage] = useState(null);

  // useEffect(() => {
  // socket.on("connect", () => {
  //   setIsConnected(true);
  // });
  // socket.on("disconnect", () => {
  //   setIsConnected(false);
  // });
  // socket.on("message", (data) => {
  //   setLastMessage(data);
  // });
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("message");
  //   };
  // });

  // const sendMessage = () => {
  //   socket.emit("hello!");
  // };

  return (
    <>
      <h1>Battleship</h1>
      <div className="boards">
        <div>
          Your Board
          <Board />
        </div>
        <div>
          Opponent's Board
          <Board />
        </div>
      </div>
      <div>HELLO</div>
    </>
  );
};

export default App;
