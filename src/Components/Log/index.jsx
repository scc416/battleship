import React, { useRef, useEffect } from "react";
import "./Log.css";
import LogListItem from "./LogListItem";
import NewGameButton from "./NewGameButton";

const LogList = ({ messages, newGame }) => {
  const log = useRef(null);

  useEffect(() => {
    if (log && log.current) {
      log.current.scrollTop = log.current.scrollHeight;
    }
  }, [log, messages]);

  const elms = messages.map(({ time, content }) => {
    return <LogListItem {...{ time, content, key: time }} />;
  });

  return (
    <div className="log-display">
      <NewGameButton {...{ newGame }} />
      <div className="logs" ref={log}>
        {elms}
      </div>
    </div>
  );
};

export default LogList;
