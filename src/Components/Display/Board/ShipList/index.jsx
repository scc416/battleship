import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";
import TileButtons from "./TileButtons";

const ShipList = ({
  ships,
  showConfirmCancelButtons,
  clearTiles,
  confirmTiles,
}) => {
  const lst = [];
  for (const ship of ships) {
    lst.push(<ShipListItem key={Math.random()} ship={ship} />);
  }
  return (
    <div className="ship-list">
      <div>{lst}</div>
      {showConfirmCancelButtons && (
        <TileButtons {...{ clearTiles, confirmTiles }} />
      )}
    </div>
  );
};

export default ShipList;
