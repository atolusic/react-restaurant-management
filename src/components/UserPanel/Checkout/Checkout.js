import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

import classes from "./Checkout.css";
import Orders from "../Orders/Orders";
import MealWrapper from "../../../hoc/MealWrapper/MealWrapper";
import Popup from "../../UI/Popup";

class Checkout extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    telRight: false,
    address: "",
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.props.history.push("/menu");
  };

  onInputChange = e => {
    if (e.target.name === "tel") {
      let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (e.target.value.match(phoneno)) {
        this.setState({ telRight: true });
      } else {
        this.setState({ telRight: false });
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/menu");
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { firestore } = this.props;
    const { totalPrice, orders } = this.props.location.state;
    const { name, email, tel, address } = this.state;

    let date = new Date();

    const orderData = {
      totalPrice,
      orders,
      contact: { name, email, tel, address },
      orderTime: date.toUTCString(),
      shipped: false
    };

    firestore.add({ collection: "orders" }, orderData).then(() => {
      this.onOpenModal();
      setTimeout(() => this.props.history.push("/menu"), 2000);
    });
  };

  render() {
    const { name, email, tel, telRight, address, open } = this.state;
    return (
      <div className={classes.CheckoutWrapper}>
        <div className={`row ${classes.CheckoutMainDiv}`}>
          <p className={classes.OrderDetailP}>Detalji kupovine</p>
          <div className={`col m6 ${classes.MealWrapperDivStyle}`}>
            <MealWrapper
              icn="person"
              fntSize="2rem"
              fntFamily="Haymaker"
              title="Vasi podaci"
              additionStyle={{
                color: "#333",
                textShadow: "2px 2px 2px rgba(150, 150, 150, 1)"
              }}
            >
              <form onSubmit={this.onSubmit}>
                <div className="input-field">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    required
                    value={name}
                    name="name"
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    onChange={this.onInputChange}
                  />
                  <label htmlFor="icon_prefix">Ime i prezime</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <input
                    required
                    value={email}
                    id="email"
                    type="email"
                    className="validate"
                    onChange={this.onInputChange}
                    name="email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">phone</i>
                  <input
                    required
                    value={tel}
                    name="tel"
                    id="icon_telephone"
                    type="tel"
                    className="validate"
                    onChange={this.onInputChange}
                  />
                  <label htmlFor="icon_telephone">Telephone</label>
                  <span
                    className="helper-text"
                    data-error={telRight}
                    data-success={telRight}
                  />
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">home</i>
                  <input
                    required
                    value={address}
                    name="address"
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    onChange={this.onInputChange}
                  />
                  <label htmlFor="icon_prefix">Adresa</label>
                </div>
                <button className="waves-effect waves-light btn-small orange lighten-1 col m12">
                  Potvrdi
                </button>
              </form>
            </MealWrapper>
          </div>
          <div className={`col m6 ${classes.MealWrapperDivStyle}`}>
            <MealWrapper
              icn="shopping_cart"
              fntSize="2rem"
              fntFamily="Haymaker"
              title="Kosarica"
              additionStyle={{
                color: "#333",
                textShadow: "2px 2px 2px rgba(150, 150, 150, 1)",
                border: 0
              }}
            >
              <Orders checkout />
            </MealWrapper>
          </div>
          <Popup
            header="Vaša nardužba je uspješno zaprimljena!"
            state={open}
            onClose={this.onCloseModal}
            onClosePopup={this.onCloseModal}
            checkout
          />
        </div>
      </div>
    );
  }
}

export default firestoreConnect()(Checkout);
