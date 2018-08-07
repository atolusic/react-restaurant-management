import React, { Component } from "react";
import MealManagement from "../MealManagement/MealManagement";

export class AdminPanel extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          padding: "2rem",
          margin: "2rem",
          width: "inherit",
          border: ".5rem double #1a1a1a"
        }}
      >
        <div className="col m3">
          <MealManagement />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
