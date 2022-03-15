import React from "react";
import CoordinateLabelListIItem from "./CoordinateLabelListItem";

const CoordinateLabelList = ({ isRow }) => {
  const parentDivClassName = isRow
    ? "row-column-label"
    : "row-column-label row-column column-label";

  const lst = [];

  for (let i = 0; i < 10; i++) {
    const elm = <CoordinateLabelListIItem {...{ key: i, isRow, index: i }} />;
    lst.push(elm);
  }

  return <div className={parentDivClassName}>{lst}</div>;
};

export default CoordinateLabelList;
