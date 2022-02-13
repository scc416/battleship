import React from "react";

const Overlay = ({ settings }) => {
  const { show, text } = settings;
  const style = show ? { display: "flex" } : {};
  console.log(show);
  return (
    <div className="overlay" style={style}>
      <h2>{text && text}</h2>
    </div>
  );
};

export default Overlay;
