import React, { Component } from "react";
import ReactFontFace from "react-font-face";

import { fontSecondary } from "../../assets/font/font";

import classes from "./MealWrapper.css";

class MealWrapper extends Component {
  render() {
    const {
      children,
      icn,
      fntSize,
      title,
      icnSize,
      clr,
      myhamby,
      desc
    } = this.props;

    return (
      <div className="card">
        <div className="card-content grey-text">
          <span
            className={`card-title ${classes.Header}`}
            style={{ fontSize: fntSize, color: clr }}
          >
            {myhamby ? (
              <div>
                <span className={classes.Title}>sweet</span>
                <span>{title}</span>
                <span className={classes.Title}>o' mine</span>
              </div>
            ) : (
              title
            )}
            {icn && (
              <span style={{ fontSize: icnSize }} className="material-icons">
                {icn}
              </span>
            )}
            {desc && <span className={classes.Desc}>{desc}</span>}
          </span>
          <ul className={classes.MealWrapper}>{children}</ul>
        </div>
      </div>
    );
  }
}

export default ReactFontFace(MealWrapper, fontSecondary);
