import React from "react";
import "./Log.css";
import LogListItem from "./LogListItem";

const LogList = () => {
  return (
    <div className="logs">
      <LogListItem />
      <LogListItem />
      <LogListItem />
      <LogListItem />
      <LogListItem />
      <LogListItem />
    </div>
  );
};

export default LogList;
