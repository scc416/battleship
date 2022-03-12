import React from "react";
import "./ShipList.css";

const ShipListItem = ({ ship: { name, positions } }) => {
  const allDestroyed = positions.reduce(({ hit }, destroyed) => {
    if (!hit) return false;
  }, true);

  const style = allDestroyed ? { textDecoration: "line-through" } : {};
  return <div style={style}>{name}</div>;
};

export default ShipListItem;
