import React from "react";
import "./ShipList.css";

const ShipListItem = ({ ship: { name, coordinates } }) => {
  const allDestroyed = true;

  const style = allDestroyed ? { textDecoration: "line-through" } : {};
  return <div style={style}>{name}</div>;
};

export default ShipListItem;
