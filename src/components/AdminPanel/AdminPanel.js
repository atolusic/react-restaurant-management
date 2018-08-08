import React, { Component } from "react";

import MealManagement from "../MealManagement/MealManagement";
import Meals from "../MealManagement/Meals/Meals";

class AdminPanel extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          padding: "1rem",
          margin: "1rem",
          width: "inherit",
          border: ".5rem double #1a1a1a",
          backgroundColor: "#f7f7f7",
          height: "90vh"
        }}
      >
        <div className="col m3">
          <MealManagement />
        </div>
        <div className="col m5" style={{ height: "100%", overflowY: "auto" }}>
          <Meals />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
