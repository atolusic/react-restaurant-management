import React, { Component } from "react";

import Burger from "../Burger/Burger";
import BuildControls from "./BuildConstrols/BuildControls";

import classes from "./BurgerBuilder.css";

class BurgerBuilder extends Component {
  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger />
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBuilder;
