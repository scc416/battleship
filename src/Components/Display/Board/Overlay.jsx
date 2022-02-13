import React from "react";

const Overlay = ({ settings }) => {
  const { show, text } = settings;
  const style = show ? { display: "flex" } : {};
  return (
    <div className="overlay" style={style}>
      <h2>{text && text}</h2>
    </div>
  );
};

export default Overlay;
