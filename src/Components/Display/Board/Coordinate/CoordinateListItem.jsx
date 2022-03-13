import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faShip } from "@fortawesome/free-solid-svg-icons";

const CoordinateListItem = ({ clickHandler, selected, confirmedClassName }) => {
  if (selected) console.log("SELECTED");
  return (
    <div className="square" onClick={clickHandler}>
      {selected && <FontAwesomeIcon icon={faAnchor} />}
      {confirmedClassName && (
        <FontAwesomeIcon icon={faShip} className={confirmedClassName} />
      )}
    </div>
  );
};

export default CoordinateListItem;
