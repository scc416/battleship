import React from "react";

const Overlay = ({ settings }) => {
  const { show, text } = settings;
  const style = show ? { display: "block" } : {};
  console.log(show);
  return (
    <div className="overlay" style={style}>
      {text && text}
    </div>
  );
};

export default Overlay;
