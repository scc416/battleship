import React from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import useGame from "./hooks/useGame";

const App = () => {
  const {
    showOpponentOverlay,
    showMyOverlay,
    myShips,
    opponentShips,
    showConfirmCancelButtons,
    clickTile,
    chosenTiles,
    clearTiles,
    confirmTiles,
    logState
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
          clickTile,
          chosenTiles,
          clearTiles,
          confirmTiles
        }}
      />
      <LogList {...logState} />
    </>
  );
};

export default App;
