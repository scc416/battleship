import { useRef, useEffect } from "react";

const useScrollToBottom = (messages) => {
  const log = useRef(null);

  useEffect(() => {
    if (log && log.current) {
      log.current.scrollTop = log.current.scrollHeight;
    }
  }, [log, messages]);

  return log;
};

export default useScrollToBottom;
