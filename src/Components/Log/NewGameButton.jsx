import React from "react";

const NewGameButton = ({ newGame }) => {
  return (
    <div className="new-game">
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default NewGameButton;
