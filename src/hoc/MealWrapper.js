import React, { Component } from "react";

class MealWrapper extends Component {
  render() {
    const { children, icn, fntSize, title, icnSize } = this.props;
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
              paddingBottom: "2rem"
            }}
          >
            {title}
            <span style={{ fontSize: icnSize }} className="material-icons">
              {icn}
            </span>
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

export default MealWrapper;
