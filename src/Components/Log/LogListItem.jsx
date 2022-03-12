import React from "react";

const LogListItem = ({time, message}) => {
  return <p>{`[${time}] ${message}`}</p>;
}

export default LogListItem;