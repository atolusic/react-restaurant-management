import React, { Component } from "react";
import { Link } from "react-router-dom";

import PulseButton from "../../UI/PulseButton";

import noImg from "../../../assets/imgs/noImg.png";
import showSpecialOfferItemDetails from "../../../assets/showSpecialOfferItemDetails";

class MenuItem extends Component {
  render() {
    const {
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

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div style={{ display: "flex", flex: 2 }}>
            <div
              style={
                specialOfferItem
                  ? {
                      display: "flex",
                      flexDirection: "column"
                    }
                  : null
              }
            >
              <img
                src={img ? img : noImg}
                width={"150"}
                height={"130"}
                style={{ border: "2px solid #333", padding: ".2rem" }}
                className="z-depth-3"
                alt={name}
              />
              {specialOfferItem ? (
                <div
                  style={{
                    fontFamily: "Haymaker",
                    color: "#333",
                    lineHeight: 0.2,
                    fontSize: "3rem",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem"
                  }}
                >
                  <span>+</span>
                  {showSpecialOfferItemDetails(specialOfferItem)}
                </div>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 .5rem 0 1rem ",
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
              <p style={{ width: "100%" }}>{desc}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
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
                {discount && (
                  <p
                    style={{
                      fontFamily: "Haymaker",
                      fontSize: ".7rem",
                      color: "#ef5350",
                      fontWeight: 600
                    }}
                  >
                    ➥ akcijska cijena
                  </p>
                )}
              </div>
              <div>
                <Link
                  to={{ pathname: `meals/${id}` }}
                  className="waves-effect waves-light btn-small orange lighten-1"
                >
                  <i className="material-icons" style={{ fontSize: "1.5rem" }}>
                    shopping_cart
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
