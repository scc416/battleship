import React from "react";

const Overlay = ({ settings }) => {
  const style = settings ? { display: "flex" } : {};
  return (
    <div className="overlay" style={style}>
      <h2>{settings && settings}</h2>
    </div>
  );
};

export default Overlay;
