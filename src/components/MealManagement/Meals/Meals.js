import React, { Component } from "react";
import ReactFontFace from "react-font-face";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { fontSecondary } from "../../../assets/font/font";

import Spinner from "../../UI/Spinner";
import Meal from "./Meal";

class Meals extends Component {
  render() {
    // dok ajax request nije success umjesto obroka pokazi spinner
    let mealList = (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Spinner />
      </div>
    );
    // destructure meals iz propsa
    const { meals } = this.props;
    if (meals) {
      // prikazi obroke
      mealList = meals.map(meal => (
        <li
          key={meal.id}
          style={{
            width: "100%",
            margin: ".7rem 0",
            borderBottom: "2px solid #ccc",
            paddingBottom: "1rem"
          }}
        >
          <Meal mealDetail={meal} />
        </li>
      ));
    }

    return mealList;
  }
}

// hoc -> firestore api dohvati sve podatke ovisno o parametrima sa servera i popuni state, zatim se mapira state u props
export default compose(
  firestoreConnect(["specialOffer", "meals"]),
  connect((state, props) => ({
    meals: props.spec
      ? state.firestore.ordered.specialOffer
      : state.firestore.ordered.meals
  }))
)(ReactFontFace(Meals, fontSecondary));
