import React from "react";
import "./App.css";
import io from "socket.io-client";
import Boards from "./Components/Boards/";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
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
      <Heading />
      <Boards
        {...{
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
        }}
      />
      <LogList
        messages={[
          { time: "1", content: "hello" },
          { time: "2", content: "hello" },
          { time: "3", content: "hello" },
          { time: "4", content: "hello" },
          { time: "5", content: "hello" },
          { time: "6", content: "hello" },
        ]}
      />
    </>
  );
};

export default App;
