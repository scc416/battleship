import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faShip } from "@fortawesome/free-solid-svg-icons";
import { MISSED, SELECTED, CONFIRMED, HIT } from "../../../../constants";

const CoordinateListItem = ({ clickHandler, state }) => {
  const { type, shipName } = state;
  const className = shipName
    ? `square ${shipName}`
    : "square";
  return (
    <div className={className} onClick={clickHandler}>
      {type === SELECTED && <FontAwesomeIcon icon={faAnchor} />}
      {type === CONFIRMED && <FontAwesomeIcon icon={faShip} />}
    </div>
  );
};

export default CoordinateListItem;
