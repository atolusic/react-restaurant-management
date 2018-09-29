import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import MealWrapper from "../../../hoc/MealWrapper/MealWrapper";

import classes from "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .catch(err => alert("Invalid Login Credentials"));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={classes.Login}>
        <div className={classes.LoginContentWrapperDiv}>
          <MealWrapper
            fntSize="2rem"
            fntFamily="Haymaker"
            title="Admin Login"
            additionStyle={{
              color: "#333",
              textShadow: "2px 2px 2px rgba(150, 150, 150, 1)",
              border: 0
            }}
          >
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input
                  onChange={e => this.onInputChange(e)}
                  value={email}
                  required
                  name="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="icon_telephone">Email</label>
                <span className="helper-text" />
              </div>
              <div className="input-field">
                <i className="material-icons prefix">vpn_key</i>
                <input
                  onChange={e => this.onInputChange(e)}
                  required
                  value={password}
                  name="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="icon_prefix">Adresa</label>
              </div>
              <Link
                to="/"
                style={{ marginRight: "1rem" }}
                className="waves-effect waves-light btn-small orange lighten-1 col m12"
              >
                <i className="material-icons prefix">arrow_back</i>
              </Link>
              <button className="waves-effect waves-light btn-small orange lighten-1 col m12">
                Login
              </button>
            </form>
          </MealWrapper>
        </div>
      </div>
    );
  }
}

export default firebaseConnect()(Login);
