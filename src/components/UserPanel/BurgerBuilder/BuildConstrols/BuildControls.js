import React, { Component } from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

class BuildControls extends Component {
  render() {
    const buildCntrlLabels = ["salata", "pljeskavica", "slanina", "sir"];
    let buildCntrls = buildCntrlLabels.map(item => (
      <BuildControl key={item} text={item} />
    ));
    return <div className={classes.BuildControls}>{buildCntrls}</div>;
  }
}

export default BuildControls;
