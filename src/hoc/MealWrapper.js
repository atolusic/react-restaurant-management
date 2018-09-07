import React, { Component } from "react";
import ReactFontFace from "react-font-face";

import { fontSecondary } from "../assets/font/font";

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
            className="card-title"
            style={{
              fontFamily: "Blanch Caps Inline Regular",
              fontSize: fntSize,
              textAlign: "center",
              borderBottom: "3px double #333",
              paddingBottom: "1rem",
              color: clr
            }}
          >
            {myhamby ? (
              <div>
                <span style={{ fontSize: "4rem", color: "#ffa726" }}>
                  sweet
                </span>
                <span>{title}</span>
                <span style={{ fontSize: "4rem", color: "#ffa726" }}>
                  o' mine
                </span>
              </div>
            ) : (
              title
            )}
            {icn && (
              <span style={{ fontSize: icnSize }} className="material-icons">
                {icn}
              </span>
            )}
            {desc && (
              <span
                style={{
                  fontFamily: "Haymaker",
                  fontSize: "1.5rem",
                  color: "#ffa726",
                  fontWeight: 500
                }}
              >
                {desc}
              </span>
            )}
          </span>
          <ul style={mealWrapperStyle}>{children}</ul>
        </div>
      </div>
    );
  }
}

const mealWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
  width: "100%"
};

export default ReactFontFace(MealWrapper, fontSecondary);
