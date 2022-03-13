import React from "react";

const TileButtons = ({ clearTiles, confirmTiles }) => {
  return (
    <div>
      <button onClick={confirmTiles}>Confirm</button>
      <button onClick={clearTiles}>Clear</button>
    </div>
  );
};

export default TileButtons;
