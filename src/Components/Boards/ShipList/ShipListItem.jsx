import React from "react";
import "./ShipList.css";

const ShipListItem = ({ship}) => {
  return <div>{ship.name}</div>;
};

export default ShipListItem;
