import React from "react";
import ReactFontFace from "react-font-face";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { fontSecondary } from "../../../assets/font/font";
import noImg from "../../../assets/imgs/noImg.png";

import PulseButton from "../../UI/PulseButton";

class Meal extends React.Component {
  state = {
    image: null
  };

  onUploadClickHandler = e => {
    const { firebase, mealDetail, firestore } = this.props;
    const { image } = this.state;
    const storage = firebase.storage().ref(`meals/${mealDetail.id}`);
    storage.put(image).then(() => {
      storage.getDownloadURL().then(img => {
        const updMeal = {
          ...mealDetail,
          img
        };
        firestore.update({ collection: "meals", doc: mealDetail.id }, updMeal);
      });
    });
  };

  render() {
    const {
      mealDetail: { name, desc, price, specialOffer, discount, img }
    } = this.props;
    return (
      <div style={mealStyle}>
        <div style={{ display: "flex", flex: 2 }}>
          <img
            src={img ? img : noImg}
            width="200"
            height="150"
            style={{ flex: 1 }}
          />
          <div style={{ flexDirection: "column", marginLeft: "1rem", flex: 2 }}>
            <p
              style={{
                fontFamily: "Haymaker",
                color: "#333",
                letterSpacing: ".2rem",
                fontSize: "1.5rem"
              }}
            >
              {name}
            </p>
            <p style={{ width: "100%" }}>
              {desc.length < 100 ? desc : "Predugačak opis.. Detalji ⇒"}
            </p>
            <div>
              <input
                type="file"
                onChange={event =>
                  this.setState({ image: event.target.files[0] })
                }
              />
              <button onClick={e => this.onUploadClickHandler(e)}>
                Dodaj fotografiju
              </button>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {specialOffer && (
            <PulseButton icon={"whatshot"} color={"red lighten-1"} />
          )}
          {discount && (
            <PulseButton icon={"trending_down"} color={"green accent-3"} />
          )}
        </div>
      </div>
    );
  }
}

const mealStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
};

export default compose(
  firestoreConnect(props => [
    { collection: "meals", storeAs: "meal", doc: props.mealDetail.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    meal: ordered.meal && ordered.meal[0]
  }))
)(ReactFontFace(Meal, fontSecondary));
