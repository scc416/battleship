import React from "react";
import "./ShipList.css";
import { checkIfSameCoordinate } from "../../../../helpers";

const ShipListItem = ({ ship: { name, coordinates }, shot }) => {
  const allDestroyed = coordinates.reduce((shipCoordinate, destroyed) => {
    for (const coordinate of shot) {
      const hit = checkIfSameCoordinate(shipCoordinate, coordinate);
      if (hit) return destroyed;
    }
    return false;
  }, true);

  const style = allDestroyed ? { textDecoration: "line-through" } : {};
  return <div className="ship-name" style={style}><div className="label"></div>{name}</div>;
};

export default ShipListItem;
