import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { Chart, Axis, Series, Tooltip, Cursor, Line, Bar } from "react-charts";

import MealWrapper from "../../../hoc/MealWrapper/MealWrapper";
import Spinner from "../../UI/Spinner";

import classes from "./OrderStats.css";

const OrderStats = props => {
  const onCheckboxChange = (e, id, shipped) => {
    const data = {
      shipped: !shipped
    };

    props.firestore.update({ collection: "orders", doc: id }, data);
  };

  const { orders, firestore } = props;

  let ordersDetail = (
    <div className={classes.SpinnerStyle}>
      <Spinner />
    </div>
  );
  if (orders) {
    let orderList = orders.map(order => (
      <li key={order.id} className={`${classes.OrderLi}`}>
        <div>
          <p className={classes.OrderContactInfos}>
            <span className={classes.OrderSpan}>ID Nardužbe: </span>
            {order.id}
          </p>
          <p className={classes.OrderContactInfos}>
            <span className={classes.OrderSpan}>Naručeno: </span>
            {order.orderTime}
          </p>
          <div className={classes.OrderContactInfos}>
            <span className={`${classes.OrderSpan} ${classes.OrderDone}`}>
              <p>Isporučeno</p>
              <p>
                <label className={classes.OrderDoneCheckbox}>
                  <input
                    checked={order.shipped}
                    type="checkbox"
                    onChange={e => onCheckboxChange(e, order.id, order.shipped)}
                  />
                  <span />
                </label>
              </p>
            </span>
          </div>
          <p className={`${classes.OrderContactInfos} ${classes.ContactBrdr}`}>
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
        <div className={classes.OrderedMealsAndPrice}>
          <ul className={classes.OrderedMeals}>
            {order.orders.map((meal, i) => (
              <li key={order.id + i}>
                <p>
                  {meal.count} x {meal.name}
                  ........
                  {meal.price} kn
                </p>
                {meal.name === "Sweet Burger" && (
                  <div>
                    <hr />
                    <p>Sastojci: </p>
                    <div className={classes.BurgerIngs}>
                      <p>Pljeskavica: {meal.ings.pljeskavica}</p>
                      <p>Salata: {meal.ings.salata}</p>
                      <p>Sir: {meal.ings.sir}</p>
                      <p>Slanina: {meal.ings.slanina}</p>
                    </div>
                    <p>Umaci: </p>
                    <div className={classes.BurgerIngs}>
                      K: {meal.sauces.ketchup ? "+" : "-"}, M:{" "}
                      {meal.sauces.mayo ? "+" : "-"}, S:{" "}
                      {meal.sauces.mustard ? "+" : "-"}
                    </div>
                    <hr />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p className={classes.PriceNotation}>
            Ukupno: <span className={classes.Price}>{order.totalPrice}</span> kn
          </p>
        </div>
      </li>
    ));

    let chartData = [];

    orders.forEach(order => {
      order.orders.forEach(o => {
        if (chartData.length > 0) {
          let pushed = false;
          chartData.forEach(cd => {
            if (cd.x === o.name) {
              cd.y++;
              pushed = true;
            }
          });
          if (!pushed) {
            chartData.push({ x: o.name, y: 1 });
          }
        } else {
          chartData.push({ x: o.name, y: 1 });
        }
      });
    });

    let chart = (
      <Chart
        data={[
          {
            label: "Br.Narudzbi",
            data: chartData
          }
        ]}
      >
        <Axis primary type="ordinal" position="left" />
        <Axis type="linear" stacked position="bottom" />
        <Series type={Bar} />
        <Cursor primary />
        <Cursor />
        <Tooltip />
      </Chart>
    );

    ordersDetail = (
      <div className={`row ${classes.OrderStatsContent}`}>
        <div className={`col m6`}>{orderList}</div>
        <div className={`col m6 ${classes.ChartDiv}`}>
          <p className={classes.NumOfOrders}>Br.Narudžbi</p>
          {chart}
        </div>
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
};

export default compose(
  firestoreConnect(["orders"]),
  connect(state => ({
    orders: state.firestore.ordered.orders
  }))
)(OrderStats);
