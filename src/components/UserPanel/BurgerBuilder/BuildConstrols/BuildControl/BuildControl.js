import React from "react";

import classes from "./BuildControl.css";

const BuildControl = props => {
  const { text } = props;
  return (
    <div className={classes.BuildControl}>
      <p>{text}</p>
      <div>
        <button className="btn-small orange darken-1">+</button>
        <button className="btn-small red lighten-1">-</button>
      </div>
    </div>
  );
};

export default BuildControl;
