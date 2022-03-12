import React from "react";

const CoordinateListItem = ({ clickHandler }) => {
  return <div className="square" onClick={clickHandler}></div>;
};

export default CoordinateListItem;
