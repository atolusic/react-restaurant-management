import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Spinner from "../../UI/Spinner";
import MenuItem from "./MenuItem";

const MenuItems = props => {
  let mealList = (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Spinner />
    </div>
  );

  const { meals } = props;
  if (meals) {
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
        <MenuItem mealDetail={meal} />
      </li>
    ));
  }
  return <div>{mealList}</div>;
};

export default compose(
  firestoreConnect(["meals"]),
  connect((state, props) => ({
    meals: state.firestore.ordered.meals
  }))
)(MenuItems);
