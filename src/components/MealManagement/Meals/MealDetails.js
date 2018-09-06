import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import ReactFontFace from "react-font-face";

import { fontSecondary } from "../../../assets/font/font";
import noImg from "../../../assets/imgs/noImg.png";

import Spinner from "../../UI/Spinner";
import UploadImage from "../../UI/UploadImage";
import MealForm from "../Form/MealForm";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  width: "100%"
};

class MealDetails extends Component {
  state = {
    loading: false,
    name: "",
    price: "",
    desc: "",
    specialOffer: false,
    discount: false
  };

  componentDidMount() {
    const { firestore, match } = this.props;
    firestore.get(`meals/${match.params.id}`).then(data => {
      if (data.exists) {
        this.setState({ ...data.data() });
      }
    });
  }

  render() {
    const { loading } = this.state;

    let mealDetails = (
      <div style={{ ...center }}>
        <Spinner />
      </div>
    );

    if (this.state.name) {
      const {
        meal,
        meal: { img, name }
      } = this.props;

      mealDetails = (
        <div
          className="z-depth-5"
          style={{
            border: ".5rem double #1a1a1a",
            backgroundColor: "#f7f7f7",
            height: "80vh",
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              width: "100%",
              height: "100%"
            }}
          >
            <p
              style={{
                fontFamily: "Haymaker",
                color: "#333",
                letterSpacing: ".2rem",
                fontSize: "3rem",
                marginTop: "-1rem"
              }}
            >
              {name}
            </p>
            {loading ? (
              <div style={{ ...center, height: "100%" }}>
                <Spinner />
              </div>
            ) : (
              <img
                style={{
                  border: "2px solid #333",
                  padding: ".2rem"
                }}
                src={img ? img : noImg}
                width="80%"
                height="70%"
                className="z-depth-4"
                alt={name}
              />
            )}
            <div style={{ width: "80%" }}>
              <UploadImage
                mealDetail={meal}
                toggleLoading={() =>
                  this.setState({ loading: !this.state.loading })
                }
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ width: "80%" }}>
              <MealForm editMeal meal={{ ...this.state }} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ ...center, flexDirection: "column", position: "relative" }}>
        {mealDetails}
      </div>
    );
  }
}

const mapStateToProps = ({ firestore: { ordered } }) => ({
  meal: ordered.meal && ordered.meal[0]
});

export default compose(
  firestoreConnect(props => {
    return [
      {
        collection: "meals",
        storeAs: "meal",
        doc: props.match.params.id
      }
    ];
  }),
  connect(mapStateToProps)
)(ReactFontFace(MealDetails, fontSecondary));
