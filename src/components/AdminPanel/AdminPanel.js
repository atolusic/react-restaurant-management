import React, { Component } from "react";

import Meals from "../MealManagement/Meals/Meals";
import MealWrapper from "../../hoc/MealWrapper";
import BurgerIngredientsManager from "../MealManagement/BurgerIngredientsManager";
import ManagementCard from "../UI/ManagementCard";
import MealForm from "../MealManagement/Form/MealForm";

class AdminPanel extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          padding: ".2rem",
          margin: ".5rem",
          width: "inherit",
          border: ".5rem double #1a1a1a",
          backgroundColor: "#f7f7f7",
          height: "90vh"
        }}
      >
        <div className="col m3" style={{ height: "100%", overflowY: "auto" }}>
          <ManagementCard icn="restaurant" title="DODAJ NOVI OBROK">
            <MealForm />
          </ManagementCard>
          <ManagementCard icn="restaurant" title="BURGER MANAGER">
            <BurgerIngredientsManager />
          </ManagementCard>
        </div>
        <div className="col m5" style={{ height: "100%", overflowY: "auto" }}>
          <MealWrapper
            fntSize="6rem"
            icn="local_pizza"
            title="Obroci"
            icnSize="3rem"
          >
            <Meals />
          </MealWrapper>
        </div>
        <div className="col m4" style={{ height: "100%", overflowY: "auto" }}>
          <MealWrapper
            fntSize="5rem"
            icn="priority_high"
            title="Posebna ponuda"
            icnSize="2.5rem"
          >
            <Meals spec />
          </MealWrapper>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
