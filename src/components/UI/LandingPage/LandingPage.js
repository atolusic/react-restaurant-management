import React from "react";
import ReactFontFace from "react-font-face";
import { Link } from "react-router-dom";

import classes from "./LandingPage.css";
import { fontSecondary } from "../../../assets/font/font";

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.MoveUp}>
        <Link
          to="/adminpanel"
          className={`btn-small orange lighten-2 ${classes.AdmBtn}`}
        >
          <i className="material-icons">pan_tool</i>
        </Link>
        <span>sweet</span>
        <span className={classes.BurgerTitle}>Burger</span>
        <span>o'mine</span>
        <p>Burgers N' Snacks</p>
        <div className={classes.LPBtns}>
          <Link
            to="/menu"
            className="btn-large waves-effect waves-light orange lighten-2"
          >
            Ulaz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReactFontFace(LandingPage, fontSecondary);
