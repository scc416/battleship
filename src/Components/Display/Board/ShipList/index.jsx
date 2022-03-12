import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";

const ShipList = ({ ships, showConfirmCancelButtons, clearTiles }) => {
  const lst = [];
  for (const ship of ships) {
    lst.push(<ShipListItem key={Math.random()} ship={ship} />);
  }
  return (
    <div className="ship-list">
      <div>{lst}</div>
      {showConfirmCancelButtons && (
        <div>
          <button>Confirm</button>
          <button onClick={clearTiles}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default ShipList;
