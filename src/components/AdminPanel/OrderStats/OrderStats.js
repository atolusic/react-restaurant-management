import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

import MealWrapper from "../../../hoc/MealWrapper/MealWrapper";
import Spinner from "../../UI/Spinner";

import classes from "./OrderStats.css";

class OrderStats extends Component {
  render() {
    const { orders, firestore } = this.props;

    let ordersDetail = (
      <div className={classes.SpinnerStyle}>
        <Spinner />
      </div>
    );
    if (orders) {
      let orderList = orders.map(order => (
        <li key={order.id} className={classes.OrderLi}>
          <div>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>ID Narduzbe: </span>
              {order.id}
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Naručeno: </span>
              {order.orderTime}
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Checkbox</span>
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Kontakt</span>
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Ime i prezime: </span>
              {order.contact.name}
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Email: </span>
              {order.contact.email}
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Br.Tel: </span>
              {order.contact.tel}
            </p>
            <p className={classes.OrderContactInfos}>
              <span className={classes.OrderSpan}>Adresa: </span>
              {order.contact.address}
            </p>
          </div>
        </li>
      ));
      ordersDetail = (
        <div className={`row ${classes.OrderStatsContent}`}>
          <div className={`col m6 ${classes.OrderList}`}>{orderList}</div>
          <div className={`col m6 ${classes.Chart}`}>ff4</div>
        </div>
      );
    }
    return (
      <div className={classes.OrderStatsWrapperDiv}>
        <div className={classes.CenterMealWrapperDiv}>
          <MealWrapper
            title="Zaprimljene narudzbe"
            fntSize="5rem"
            additionStyle={{ border: 0, color: "#333" }}
          >
            {ordersDetail}
          </MealWrapper>
        </div>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(["orders"]),
  connect(state => ({
    orders: state.firestore.ordered.orders
  }))
)(OrderStats);
