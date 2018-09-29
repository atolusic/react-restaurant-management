import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

import IngredientCheckbox from "./IngredientCheckbox";
import Spinner from "../../UI/Spinner";

class BurgerIngredientsManager extends Component {
  state = {
    allowBuild: true,
    salata: true,
    pljeskavica: true,
    slanina: true,
    sir: true,
    successMsg: false
  };

  componentDidMount() {
    const { firestore } = this.props;
    firestore.get("burger/burger").then(data => {
      if (data.exists) {
        this.setState({ ...data.data() });
      }
    });
  }

  onSaveClickHandler = e => {
    const { firestore } = this.props;

    const burgerData = {
      ...this.state
    };

    firestore
      .update({ collection: "burger", doc: "burger" }, burgerData)
      .then(() => {
        this.setState({ successMsg: true });
        setTimeout(() => this.setState({ successMsg: false }), 2000);
      });
  };

  onCheckboxChange = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    const { allowBuild, successMsg } = this.state;
    const { burger } = this.props;

    const ingredients = ["salata", "pljeskavica", "slanina", "sir"];

    let burgerIngs = (
      <div style={{ margin: "1rem" }}>
        <Spinner />
      </div>
    );

    if (burger) {
      burgerIngs = ingredients.map(item => (
        <li
          key={item}
          style={{
            width: "60%",
            textAlign: "center",
            padding: ".4rem 0"
          }}
        >
          <IngredientCheckbox
            name={item}
            allowBB={allowBuild}
            onCheckboxChange={this.onCheckboxChange}
            val={this.state[item]}
          />
        </li>
      ));
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "3px double #333",
            paddingBottom: "1.5rem"
          }}
        >
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <p style={{ marginRight: "1rem" }}>
              Omogući samoizradu Sweet Burgera
            </p>
            <div className="switch">
              <label>
                <input
                  type="checkbox"
                  checked={allowBuild}
                  name="allowBuild"
                  onChange={this.onCheckboxChange}
                />
                <span className="lever" />
              </label>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="btn-small orange lighten-1"
              style={{ width: "5.5rem" }}
              onClick={this.onSaveClickHandler}
            >
              Spremi
            </button>
            <p
              style={{
                marginLeft: "1rem",
                color: "#333",
                opacity: successMsg ? 1 : 0,
                transition: "opacity 1s ease"
              }}
            >
              Podaci uspješno pohranjeni!
            </p>
          </div>
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: ".6rem"
          }}
        >
          {burgerIngs}
        </ul>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(["burger"]),
  connect(state => ({
    burger: state.firestore.ordered.burger
  }))
)(BurgerIngredientsManager);
