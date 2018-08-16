import React from "react";
import ReactFontFace from "react-font-face";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

import { fontSecondary } from "../../../assets/font/font";
import noImg from "../../../assets/imgs/noImg.png";

import Spinner from "../../UI/Spinner";
import UploadImage from "../../UI/UploadImage";

class Meal extends React.Component {
  state = {
    loading: false
  };

  onDeleteClick = e => {
    const {
      mealDetail: { id },
      firestore
    } = this.props;

    firestore.delete({ collection: "meals", doc: id });
  };

  render() {
    const {
      mealDetail,
      mealDetail: { name, desc, price, specialOffer, discount, img, id }
    } = this.props;

    const { loading } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={mealStyle}>
          <div style={{ display: "flex", flex: 2 }}>
            {loading ? (
              <div
                className="z-depth-3"
                style={{
                  width: "150px",
                  height: "130px",
                  flex: 1,
                  border: "2px solid #333",
                  padding: ".2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Spinner />
              </div>
            ) : (
              <img
                src={img ? img : noImg}
                width="150"
                height="130"
                style={{ flex: 1, border: "2px solid #333", padding: ".2rem" }}
                className="z-depth-3"
                alt={name}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
                flex: 2
              }}
            >
              <p
                style={{
                  fontFamily: "Haymaker",
                  color: "#333",
                  letterSpacing: ".2rem",
                  fontSize: "1.6rem"
                }}
              >
                {name}
              </p>
              <p style={{ width: "100%" }}>
                {desc.length < 200 ? desc : "Predugačak opis.. Detalji ⇒"}
              </p>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <p
              style={{
                fontFamily: "Haymaker",
                color: "#333",
                fontSize: "1.3rem"
              }}
            >
              {parseFloat(price).toFixed(2)} kn
            </p>
            <div>
              {specialOffer && (
                <p style={{ fontFamily: "Haymaker", fontSize: ".9rem" }}>
                  ➥ posebna ponuda
                </p>
              )}
              {discount && (
                <p style={{ fontFamily: "Haymaker", fontSize: ".9rem" }}>
                  ➥ akcijska cijena
                </p>
              )}
            </div>
            <div>
              <Link
                to={{ pathname: `meals/${id}`, state: { spec: specialOffer } }}
                className="waves-effect waves-light btn-small orange lighten-1"
              >
                <i className="material-icons">create</i>
              </Link>
              <a
                style={{ marginLeft: ".3rem" }}
                className="waves-effect waves-light btn-small red darken-1"
                onClick={this.onDeleteClick}
              >
                <i className="material-icons">close</i>
              </a>
            </div>
          </div>
        </div>
        {!mealDetail.img ? (
          <UploadImage
            mealDetail={mealDetail}
            toggleLoading={() =>
              this.setState({ loading: !this.state.loading })
            }
          />
        ) : null}
      </div>
    );
  }
}

const mealStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
};

export default firestoreConnect()(ReactFontFace(Meal, fontSecondary));
