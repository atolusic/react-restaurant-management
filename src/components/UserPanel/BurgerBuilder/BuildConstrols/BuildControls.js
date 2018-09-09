import React, { Component } from "react";
import { connect } from "react-redux";

import BuildControl from "./BuildControl/BuildControl";
import { addMealToOrders } from "../../../../store/actions/orderActions";

import classes from "./BuildControls.css";
import BurgerSauces from "../BurgerSauces/BurgerSauces";

class BuildControls extends Component {
  state = {
    price: 5,
    sauces: {
      ketchup: false,
      mayo: false,
      mustard: false
    }
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

  onBurgerSubmitHandler = () => {
    const { price, sauces } = this.state;
    const { ings, addMealToOrders } = this.props;
    const id = {
      salata: ings.salata,
      slanina: ings.slanina,
      pljeskavica: ings.pljeskavica,
      sir: ings.sir,
      majoneza: sauces.mayo,
      ketchup: sauces.ketchup,
      senf: sauces.mustard
    };
    let payload = {
      price,
      ings,
      name: "Sweet Burger",
      // kreiranje svog id-a radi counta
      id: JSON.stringify(id),
      count: 1,
      sauces: {
        ...sauces
      }
    };
    addMealToOrders(payload);
  };

  // ovisno o odabranom umaku update-aj cijenu
  sauceUpdatePrice = (plus, sauces) => {
    if (plus) {
      // također dohvati i umake zbog submit ordera
      this.setState({ price: this.state.price + 2, sauces: { ...sauces } });
    } else {
      this.setState({ price: this.state.price - 2, sauces: { ...sauces } });
    }
  };

  arrayOfIngs = (arr, ings) => {
    for (const key in ings) {
      arr.push({ [key]: ings[key] });
    }
  };

  render() {
    const {
      onAddIngHandler,
      onDeleteIngHandler,
      ings,
      disableBtn,
      disableControls,
      disableIngs
    } = this.props;
    const { price } = this.state;
    let arrayOfIngs = [];
    // array od sastojaka *** [{salata: 2}, {slanina: 3} ...] ***
    this.arrayOfIngs(arrayOfIngs, ings); // STAO SAM KOD DISABLEA BUILD KONTROLSA
    let buildCntrls = arrayOfIngs.map((item, i) => (
      <BuildControl
        // iz propsa sam dobio obj sa sastojcima koji su disabled, dok prolazim
        // array sa sastojcima pristupam objektu iz propsa i na osnovu toga dobijem t/f treba
        // li disableat ing
        disableThisIng={disableIngs[Object.keys(item)[0]]}
        disableControls={disableControls}
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
        <button
          onClick={this.onBurgerSubmitHandler}
          disabled={disableBtn}
          className={`btn small amber darken-1 ${classes.SubmitBurgerBtn}`}
        >
          Potvrdi
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addMealToOrders }
)(BuildControls);
