import React from "react";

import classes from "./BuildControl.css";

const BuildControl = props => {
  const { text, onAddIngHandler, onDeleteIngHandler, val, updatePrice } = props;
  return (
    <div className={classes.BuildControl}>
      <p>{text}</p>
      <div>
        <button
          onClick={e => {
            onAddIngHandler(text);
            updatePrice(text, true);
          }}
          className="btn-small waves-effect waves-light orange darken-1"
        >
          +
        </button>
        <button
          disabled={!val} // disable ako je nema tog sastojka
          onClick={e => {
            onDeleteIngHandler(text);
            updatePrice(text);
          }}
          className="btn-small waves-effect waves-light red lighten-1"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BuildControl;
