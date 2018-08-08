import React from "react";

const PulseButton = props => {
  const { icon, color } = props;
  return (
    <div
      className={`btn-floating pulse ${color}`}
      style={{ margin: ".5rem", cursor: "context-menu" }}
    >
      <i className="material-icons">{icon}</i>
    </div>
  );
};

export default PulseButton;
