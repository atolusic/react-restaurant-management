import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner";

class MealDetails extends Component {
  render() {
    const { meal } = this.props;

    let mealDetails = <Spinner />;

    if (meal) {
      mealDetails = <div>{meal.name}</div>;
    }

    return mealDetails;
  }
}

const mapStateToProps = ({ firestore: { ordered } }) => ({
  meal: ordered.meal && ordered.meal[0]
});

export default compose(
  firestoreConnect(props => [
    { collection: "meals", storeAs: "meal", doc: props.match.params.id }
  ]),
  connect(mapStateToProps)
)(MealDetails);
