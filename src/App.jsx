import React from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import useGame from "./hooks/useGame";

const App = () => {
  const {
    newGame,
    showOpponentOverlay,
    showMyOverlay,
    messages,
    myShips,
    opponentShips,
    showConfirmCancelButtons,
    clearTiles
  } = useGame();

  return (
    <>
      <Heading />
      <Display
        {...{
          myShips,
          opponentShips,
          showOpponentOverlay,
          showMyOverlay,
          showConfirmCancelButtons,
          clearTiles
        }}
      />
      <LogList {...{ messages, newGame }} />
    </>
  );
};

export default App;
