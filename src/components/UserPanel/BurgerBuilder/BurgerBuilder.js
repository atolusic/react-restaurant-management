import React, { Component } from "react";

import Burger from "../Burger/Burger";
import BuildControls from "./BuildConstrols/BuildControls";

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBuilder;
