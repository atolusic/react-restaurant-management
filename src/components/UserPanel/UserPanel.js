import React, { Component } from "react";

import MealWrapper from "../../hoc/MealWrapper";
import MenuItems from "./Menu/MenuItems";

class UserPanel extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          border: ".5rem double #1a1a1a",
          height: "98vh",
          padding: ".3rem",
          margin: ".3rem",
          backgroundColor: "#f7f7f7"
        }}
      >
        <div className="col m5" style={{ height: "100%", overflowY: "auto" }}>
          <MealWrapper
            title="burger"
            desc="Brzo i fino"
            myhamby
            fntSize="7rem"
            clr="#1a1a1a"
          >
            <MenuItems />
          </MealWrapper>
        </div>
      </div>
    );
  }
}

export default UserPanel;
