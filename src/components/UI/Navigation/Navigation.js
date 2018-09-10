import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo/logo2.jpg";

import classes from "./Navigation.css";

const Navigation = () => {
  return (
    <nav
      style={{
        height: "7.5vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      className="orange lighten-1"
    >
      <Link
        style={{
          fontFamily: "Haymaker",
          paddingLeft: "1rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center"
        }}
        to="/"
      >
        <span
          style={{
            fontSize: "1rem",
            marginRight: ".2rem"
          }}
        >
          Sweet
        </span>

        <img src={Logo} alt="Logo" width="45" height="45" />

        <span
          style={{
            fontSize: "1rem",
            position: "relative",
            marginLeft: ".2rem"
          }}
        >
          o'mine
        </span>
      </Link>
      <div className={classes.NavigationRight}>
        <Link className={classes.NavigationItem} to="/adminpanel">
          <i className="material-icons">home</i>
        </Link>
        <Link className={classes.NavigationItem} to="/adminpanel/orders">
          Narudžbe
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
