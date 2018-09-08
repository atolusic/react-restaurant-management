import React, { Component } from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";
import BurgerSauces from "../BurgerSauces/BurgerSauces";

class BuildControls extends Component {
  state = {
    price: 5
  };

  // ovisno o sastojku update-aj cijenu, fja se koristi i za dodavanje
  // i za smanjivanje cijene ovisno o drugom parametru tj. ako postoji drugi parametar
  updatePrice = (ing, plus) => {
    switch (ing) {
      case "salata":
        if (plus) {
          this.setState({ price: this.state.price + 2 });
        } else {
          this.setState({ price: this.state.price - 2 });
        }
        break;
      case "pljeskavica":
        if (plus) {
          this.setState({ price: this.state.price + 5 });
        } else {
          this.setState({ price: this.state.price - 5 });
        }
        break;
      case "slanina":
        if (plus) {
          this.setState({ price: this.state.price + 4 });
        } else {
          this.setState({ price: this.state.price - 4 });
        }
        break;
      case "sir":
        if (plus) {
          this.setState({ price: this.state.price + 3 });
        } else {
          this.setState({ price: this.state.price - 3 });
        }
        break;
      default:
        return null;
    }
  };

  // ovisno o odabranom umaku update-aj cijenu
  sauceUpdatePrice = plus => {
    if (plus) {
      this.setState({ price: this.state.price + 2 });
    } else {
      this.setState({ price: this.state.price - 2 });
    }
  };

  arrayOfIngs = (arr, ings) => {
    for (const key in ings) {
      arr.push({ [key]: ings[key] });
    }
  };

  render() {
    const { onAddIngHandler, onDeleteIngHandler, ings } = this.props;
    const { price } = this.state;
    let arrayOfIngs = [];
    // array od sastojaka *** [{salata: 2}, {slanina: 3} ...] ***
    this.arrayOfIngs(arrayOfIngs, ings);
    let buildCntrls = arrayOfIngs.map((item, i) => (
      <BuildControl
        updatePrice={this.updatePrice}
        onAddIngHandler={onAddIngHandler}
        onDeleteIngHandler={onDeleteIngHandler}
        key={item + i}
        text={Object.keys(item)[0]} // text na osnovu kojeg se rendera odredeni sastojak u switchu
        val={item[Object.keys(item)[0]]} // vrijednost na osnovu kojeg disableam - button
      />
    ));

    return (
      <div className={classes.BuildControls}>
        <p className={classes.Price}>
          Cijena: <span>{parseFloat(price).toFixed(2)} kn</span>
        </p>
        {buildCntrls}
        <BurgerSauces sauceUpdatePrice={this.sauceUpdatePrice} />
      </div>
    );
  }
}

export default BuildControls;
