import React from "react";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";

const ShipList = () => {
  const lst = [];
  for (let i = 0; i < 5; i++) {
    lst.push(<ShipListItem />);
  }
  return <div className="ship-list">{lst}</div>;
};

export default ShipList;
