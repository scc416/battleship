import React, { useRef, useEffect } from "react";
import "./Log.css";
import LogListItem from "./LogListItem";
import NewGameButton from "./NewGameButton";

const LogList = ({ logs, messages }) => {
  const log = useRef(null);

  useEffect(() => {
    if (log && log.current) {
      log.current.scrollTop = log.current.scrollHeight;
    }
  }, [log, logs]);

  const elms = messages.map(({ time, content }) => {
    return <LogListItem {...{ time, content, key: time }} />;
  });

  return (
    <div className="log-display">
      <NewGameButton />
      <div className="logs" ref={log}>
        {elms}
      </div>
    </div>
  );
};

export default LogList;
