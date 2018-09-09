import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import noImg from "../../../../assets/imgs/noImg.png";
import showSpecialOfferItemDetails from "../../../../assets/showSpecialOfferItemDetails";

import classes from "./MenuItem.css";

import { addMealToOrders } from "../../../../store/actions/orderActions";

class MenuItem extends Component {
  onCartClickHandler = () => {
    const {
      mealDetail: { name, desc, price, discount, img, id, specialOfferItem },
      addMealToOrders
    } = this.props;
    const payload = {
      name,
      price,
      specialOfferItem,
      id,
      discount,
      count: 1
    };
    addMealToOrders(payload);
  };

  render() {
    const {
      mealDetail: { name, desc, price, discount, img, id, specialOfferItem }
    } = this.props;

    return (
      <div className={classes.MenuItem}>
        <div className={classes.MenuItemDiv}>
          <div className={classes.ImgNameAndDescDiv}>
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
                className={`z-depth-3 ${classes.Img}`}
                alt={name}
              />
              {specialOfferItem ? (
                <div className={classes.SpecialOfferItemDiv}>
                  <span>+</span>
                  {showSpecialOfferItemDetails(specialOfferItem)}
                </div>
              ) : null}
            </div>
            <div className={classes.NameAndDescDiv}>
              <p className={classes.Name}>{name}</p>
              <p className={classes.Desc}>{desc}</p>
            </div>
          </div>
          <div className={classes.PriceAndButtonsDiv}>
            <div className={classes.PriceAndButtonsChildDiv}>
              <div className={classes.PriceAndDiscountDiv}>
                <p className={classes.Price}>
                  {parseFloat(price).toFixed(2)} kn
                </p>
                {discount && (
                  <p className={classes.Discount}>➥ akcijska cijena</p>
                )}
              </div>
              <div>
                <button
                  onClick={this.onCartClickHandler}
                  className="waves-effect waves-light btn-small orange lighten-1"
                >
                  <i className={`material-icons ${classes.ShoppingCartIcon}`}>
                    shopping_cart
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addMealToOrders }
)(MenuItem);
