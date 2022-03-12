import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoordinateListItem = ({ clickHandler, selected }) => {
  if (selected) console.log("SELECTED");
  return (
    <div className="square" onClick={clickHandler}>
      {selected && <FontAwesomeIcon icon="fa-regular fa-anchor" />}
    </div>
  );
};

export default CoordinateListItem;
