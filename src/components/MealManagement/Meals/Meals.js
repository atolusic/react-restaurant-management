import React, { Component } from "react";
import ReactFontFace from "react-font-face";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { fontSecondary } from "../../../assets/font/font";
import classes from "./Meals.css";

import Spinner from "../../UI/Spinner";
import Meal from "./Meal/Meal";

const Meals = props => {
  let mealList = (
    <div className={classes.SpinnerDiv}>
      <Spinner />
    </div>
  );
  const { meals, spec } = props;
  if (meals) {
    mealList = meals.map(meal => {
      if (spec && meal.specialOffer) {
        return (
          <li key={meal.id} className={classes.MealLi}>
            <Meal mealDetail={meal} spec={props.spec} />
          </li>
        );
      } else if (!spec && !meal.specialOffer) {
        return (
          <li key={meal.id} className={classes.MealLi}>
            <Meal mealDetail={meal} spec={props.spec} />
          </li>
        );
      } else {
        return null;
      }
    });
  }

  return mealList;
};

export default compose(
  firestoreConnect(["meals"]),
  connect((state, props) => ({
    meals: state.firestore.ordered.meals
  }))
)(ReactFontFace(Meals, fontSecondary));
