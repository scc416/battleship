import React from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import useGame from "./hooks/useGame";

const App = () => {
  const { myBoardState, opponentState, logState } = useGame();

  return (
    <>
      <Heading />
      <Display {...{ myBoardState, opponentState }} />
      <LogList {...logState} />
    </>
  );
};

export default App;
