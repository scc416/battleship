import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";
import TileButtons from "./TileButtons";

const ShipList = ({
  placedShips,
  showConfirmCancelButtons,
  clearTiles,
  confirmTiles,
  shot,
  active
}) => {
  const className = active ? "ship-list active" : "ship-list";
  const lst = [];
  for (const index in placedShips) {
    const ship = placedShips[index];
    lst.push(<ShipListItem {...{ ship, shot, key: index }} />);
  }
  return (
    <div className={className}>
      <div>{lst}</div>
      {showConfirmCancelButtons && (
        <TileButtons {...{ clearTiles, confirmTiles }} />
      )}
    </div>
  );
};

export default ShipList;
