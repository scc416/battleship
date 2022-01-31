import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";

const ShipList = ({ships}) => {
  const lst = [];
  for (const ship of ships) {
    lst.push(<ShipListItem ship={ship} />);
  }
  return <div className="ship-list">{lst}</div>;
};

export default ShipList;
