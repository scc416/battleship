import React from "react";

const LogListItem = ({time, content}) => {
  return <p>{`[${time}] ${content}`}</p>;
}

export default LogListItem;