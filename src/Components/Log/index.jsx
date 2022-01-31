import React, { useRef, useEffect } from "react";
import "./Log.css";
import LogListItem from "./LogListItem";
import NewGameButton from "./NewGameButton";

const LogList = ({ logs }) => {
  const log = useRef(null);

  useEffect(() => {
    if (log && log.current) {
      log.current.scrollTop = log.current.scrollHeight;
    }
  }, [log, logs]);

  return (
    <div className="log-display">
      <NewGameButton />
      <div className="logs" ref={log}>
        <LogListItem />
        <LogListItem />
        <LogListItem />
        <LogListItem />
        <LogListItem />
        <LogListItem />
      </div>
    </div>
  );
};

export default LogList;
