import React from "react";
import ReactFontFace from "react-font-face";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { fontSecondary } from "../../../assets/font/font";
import noImg from "../../../assets/imgs/noImg.png";
import showSpecialOfferItemDetails from "../../../assets/showSpecialOfferItemDetails";

import Spinner from "../../UI/Spinner";
import UploadImage from "../../UI/UploadImage";

class Meal extends React.Component {
  state = {
    loading: false,
    dpValue: null
  };

  onAddSOItemHandler = () => {
    const {
      mealDetail: { id },
      firestore
    } = this.props;

    const { dpValue } = this.state;

    const updateData = {
      specialOfferItem: dpValue
    };

    firestore.update({ collection: "meals", doc: id }, updateData);
  };

  onDpChangeHandler = e => {
    this.setState({ dpValue: e.value });
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
      spec,
      mealDetail,
      mealDetail: {
        name,
        desc,
        price,
        specialOffer,
        discount,
        img,
        id,
        specialOfferItem
      }
    } = this.props;

    const { loading, dpValue } = this.state;

    const dpOptions = ["Coke", "Pivo", "Palacinka", "Sok", "Donut"];

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={
            spec
              ? { display: "flex", flexDirection: "column", width: "100%" }
              : mealStyle
          }
        >
          <div
            style={
              spec
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }
                : { display: "flex", flex: 2 }
            }
          >
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
                width={spec ? "140" : "150"}
                height={spec ? "120" : "130"}
                style={{ border: "2px solid #333", padding: ".2rem" }}
                className="z-depth-3"
                alt={name}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 .5rem 0 1rem ",
                flex: 2,
                textAlign: spec ? "center" : null
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
              display: "flex",
              alignItems: spec ? "center" : null,
              marginTop: spec ? "1rem" : null
            }}
          >
            {specialOfferItem ? (
              <div
                style={{
                  fontFamily: "Haymaker",
                  color: "#333",
                  lineHeight: 0.2,
                  fontSize: "3rem",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span>+</span>
                {showSpecialOfferItemDetails(specialOfferItem)}
              </div>
            ) : null}
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
                {discount && (
                  <p style={{ fontFamily: "Haymaker", fontSize: ".9rem" }}>
                    ➥ akcijska cijena
                  </p>
                )}
              </div>
              <div>
                <Link
                  to={{ pathname: `meals/${id}` }}
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
        </div>
        {!mealDetail.img ? (
          <UploadImage
            mealDetail={mealDetail}
            toggleLoading={() =>
              this.setState({ loading: !this.state.loading })
            }
          />
        ) : null}
        {spec ? (
          specialOfferItem ? null : (
            <div
              style={{
                display: "flex",
                marginTop: ".5rem",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ width: "80%", marginRight: ".5rem" }}>
                <Dropdown
                  options={dpOptions}
                  placeholder="Prilog posebne ponude"
                  value={dpValue}
                  onChange={this.onDpChangeHandler}
                />
              </div>
              <button
                disabled={!dpValue}
                onClick={this.onAddSOItemHandler}
                className="btn-small orange darken-2"
              >
                Dodaj
              </button>
            </div>
          )
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
