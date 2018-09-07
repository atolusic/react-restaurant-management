import React, { Component } from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

class BuildControls extends Component {
  render() {
    return (
      <div className={classes.BuildControls}>
        <BuildControl text="salata" />
      </div>
    );
  }
}

export default BuildControls;
