import React from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import useGame from "./hooks/useGame";

const App = () => {
  const { state, newGame, showOpponentOverlay, showMyOverlay } = useGame();
  const { messages, myShips, opponentShips } = state;

  return (
    <>
      <Heading />
      <Display
        {...{
          myShips,
          opponentShips,
          showOpponentOverlay,
          showMyOverlay,
        }}
      />
      <LogList {...{ messages, newGame }} />
    </>
  );
};

export default App;
