import React, { Component } from "react";

import Burger from "../Burger/Burger";
import BuildControls from "./BuildConstrols/BuildControls";

import classes from "./BurgerBuilder.css";

class BurgerBuilder extends Component {
  state = {
    salata: 0,
    slanina: 0,
    pljeskavica: 0,
    sir: 0
  };

  onAddIngHandler = ing => {
    this.setState({
      [ing]: this.state[ing] + 1
    });
  };

  onDeleteIngHandler = ing => {
    this.setState({
      [ing]: this.state[ing] - 1
    });
  };

  render() {
    // disable "potvrdi" button ako nije dodan niti jedan sastojak
    let arr = [];
    for (const key in this.state) {
      arr.push(this.state[key]);
    }
    let disable = arr.every(val => !val);

    return (
      <div className={classes.BurgerBuilder}>
        <Burger ings={{ ...this.state }} />
        <BuildControls
          onAddIngHandler={this.onAddIngHandler}
          onDeleteIngHandler={this.onDeleteIngHandler}
          ings={{ ...this.state }}
        />
        <button
          disabled={disable}
          className={`btn small amber darken-1 ${classes.SubmitBurgerBtn}`}
        >
          Potvrdi
        </button>
      </div>
    );
  }
}

export default BurgerBuilder;
