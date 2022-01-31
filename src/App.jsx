import React from "react";
import "./App.css";
import io from "socket.io-client";
import Board from "./Components/Board";
import ShipList from "./Components/ShipList";

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
      <div className="heading">
        <h1>[ Battleship ]</h1>
      </div>

      <div className="boards">
        <div class="whole-board">
          <ShipList />
          <div className="board">
            <h3>Your Board</h3>
            <Board />
          </div>
        </div>

        <div class="whole-board">
          <div className="board">
            <h3>Opponent's Board</h3>
            <Board />
          </div>
          <ShipList />
        </div>
      </div>
      <div className="logs">hello</div>
    </>
  );
};

export default App;
