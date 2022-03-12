import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

const CoordinateListItem = ({ clickHandler, selected }) => {
  if (selected) console.log("SELECTED");
  return (
    <div className="square" onClick={clickHandler}>
      {selected && <FontAwesomeIcon icon={faAnchor} />}
    </div>
  );
};

export default CoordinateListItem;
