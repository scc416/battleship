import React from "react";
import { columnLabel } from "../../../../constants";

const CoordinateLabelListItem = ({ isRow, index }) => {
  const coordinateClassName = isRow
    ? "coordinate-label-row"
    : "coordinate-label-column";

  const label = isRow ? index + 1 : columnLabel[index];

  return <div className={coordinateClassName}>{label}</div>;
};

export default CoordinateLabelListItem;
