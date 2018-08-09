import React, { Component } from "react";
import ReactFontFace from "react-font-face";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { fontSecondary } from "../../../assets/font/font";

import Spinner from "../../UI/Spinner";
import Meal from "./Meal";
import UploadImage from "../../UI/UploadImage";

const mealWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
  width: "100%"
};

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
          {!meal.img ? <UploadImage mealDetail={meal} /> : null}
        </li>
      ));
    }

    return (
      <div className="card">
        <div className="card-content grey-text">
          <span
            className="card-title"
            style={{
              fontFamily: "Blanch Caps Inline Regular",
              fontSize: "6rem",
              textAlign: "center",
              borderBottom: "3px double #333",
              paddingBottom: "2rem"
            }}
          >
            OBROCI<span style={{ fontSize: "3rem" }} className="material-icons">
              restaurant_menu
            </span>
          </span>
          <ul style={mealWrapperStyle}>{mealList}</ul>
        </div>
      </div>
    );
  }
}

// hoc -> firestore api dohvati sve podatke ovisno o parametrima sa servera i popuni state, zatim se mapira state u props
export default compose(
  firestoreConnect([{ collection: "meals" }]),
  connect((state, props) => ({
    meals: state.firestore.ordered.meals
  }))
)(ReactFontFace(Meals, fontSecondary));
