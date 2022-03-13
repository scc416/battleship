import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faShip } from "@fortawesome/free-solid-svg-icons";

const CoordinateListItem = ({ clickHandler, selected, confirmedClassName }) => {
  const className = confirmedClassName
    ? `square ${confirmedClassName}`
    : "square";
  return (
    <div className={className} onClick={clickHandler}>
      {selected && <FontAwesomeIcon icon={faAnchor} />}
      {confirmedClassName && (
        <FontAwesomeIcon icon={faShip} />
      )}
    </div>
  );
};

export default CoordinateListItem;
