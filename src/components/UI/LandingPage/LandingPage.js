import React from "react";
import ReactFontFace from "react-font-face";

import classes from "./LandingPage.css";
import { fontSecondary } from "../../../assets/font/font";

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.MoveUp}>
        <button className={`btn-small orange lighten-2 ${classes.AdmBtn}`}>
          <i class="material-icons">pan_tool</i>
        </button>
        <span>sweet</span>
        <span className={classes.BurgerTitle}>Burger</span>
        <span>o'mine</span>
        <p>Burgers N' Snacks</p>
        <div className={classes.LPBtns}>
          <button className="btn-large waves-effect waves-light orange lighten-2">
            Ulaz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactFontFace(LandingPage, fontSecondary);
