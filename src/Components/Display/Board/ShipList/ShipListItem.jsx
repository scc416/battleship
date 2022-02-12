import React from "react";
import "./ShipList.css";

const ShipListItem = ({ ship }) => {
  const style = ship.destroyed ? { textDecoration: "line-through" } : {};
  return <div style={style}>{ship.name}</div>;
};

export default ShipListItem;
