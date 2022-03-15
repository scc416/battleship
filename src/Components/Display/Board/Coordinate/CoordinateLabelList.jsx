import React from "react";
import { columnLabel } from "../../../../constants";

const CoordinateLabelList = ({ isRow }) => {
  const [parentDivClassName, coordinateClassName] = isRow
    ? ["", "coordinate-label-row"]
    : ["row-column column", "coordinate-label-column"];

  const lst = [];

  for (let i = 0; i < 10; i++) {
    const label = isRow ? i + 1 : columnLabel[i];
    lst.push(<div className={coordinateClassName}>{label}</div>);
  }
  return <div className={parentDivClassName}>{lst}</div>;
};

export default CoordinateLabelList;
