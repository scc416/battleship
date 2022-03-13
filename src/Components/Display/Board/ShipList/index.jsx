import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";
import TileButtons from "./TileButtons";

const ShipList = ({
  ships,
  showConfirmCancelButtons,
  clearTiles,
  confirmTiles,
  shot,
}) => {
  const lst = [];
  for (const index in ships) {
    const ship = ships[index];
    lst.push(<ShipListItem {...{ ship, shot, key: index }} />);
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
