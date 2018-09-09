import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteFromOrders } from "../../../store/actions/orderActions";

import classes from "./Orders.css";

class Orders extends Component {
  render() {
    const {
      orders: { orders },
      deleteFromOrders
    } = this.props;

    let orderList = orders.map((order, i) => {
      return (
        <li className={classes.OrderLi} key={order.id + i + order.price}>
          <div className={classes.PriceAndName}>
            <div className={classes.NameAndRemove}>
              <p className={classes.Name}>
                {order.count} x {order.name}
                {order.specialOfferItem ? ` + ${order.specialOfferItem}` : null}
              </p>
              <p
                onClick={() => deleteFromOrders(order.id)}
                className={classes.RemoveFromCart}
              >
                x
              </p>
            </div>
            <p>{parseFloat(order.price).toFixed(2)} kn</p>
          </div>
          {order.name === "Sweet Burger" && (
            <div>
              <p>Salata: {order.ings["salata"]}</p>
              <p>Pljeskavica: {order.ings["pljeskavica"]}</p>
              <p>Sir: {order.ings["sir"]}</p>
              <p>Slanina: {order.ings["slanina"]}</p>
              <div className={classes.Sauces}>
                <p>Umaci: </p>
                {order.sauces.ketchup && <p>K</p>}
                {order.sauces.mayo && <p>M</p>}
                {order.sauces.mustard && <p>S</p>}
              </div>
            </div>
          )}
        </li>
      );
    });

    let totalPrice = orders.reduce((acc, curVal) => {
      return acc + parseFloat(curVal.price);
    }, 0);

    return (
      <div className={classes.OrdersDiv}>
        <ul className={classes.Orders}>{orderList}</ul>
        <div className={classes.Total}>
          <p>Ukupno:</p>
          <p>{parseFloat(totalPrice).toFixed(2)} kn</p>
        </div>
        <button
          disabled={!orders.length}
          className={`waves-effect waves-light btn-small orange lighten-1 ${
            classes.Checkout
          }`}
        >
          Nastavi
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(
  mapStateToProps,
  { deleteFromOrders }
)(Orders);
