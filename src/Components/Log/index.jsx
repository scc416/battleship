import React, { useRef, useEffect } from "react";
import "./Log.css";
import LogListItem from "./LogListItem";

const LogList = ({ logs }) => {
  const log = useRef(null);

  useEffect(() => {
    if (log && log.current) {
      log.current.scrollTop = log.current.scrollHeight;
    }
  }, [log, logs]);

  return (
    <div className="logs" ref={log}>
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
