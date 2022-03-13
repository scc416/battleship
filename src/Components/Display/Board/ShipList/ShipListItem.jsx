import React from "react";
import "./ShipList.css";
import { checkIfSink } from "../../../../helpers";

const ShipListItem = ({ ship: { name, coordinates }, shot }) => {
  const isSink = checkIfSink(coordinates, shot);
  const style = isSink ? { textDecoration: "line-through" } : {};
  return (
    <div className="ship-name" style={style}>
      <div className="label"></div>
      {name}
    </div>
  );
};

export default ShipListItem;
