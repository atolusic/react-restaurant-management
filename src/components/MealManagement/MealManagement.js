import React from "react";
import ReactFontFace from "react-font-face";

import { fontPrimary } from "../../assets/font/font";

import MealForm from "./Form/MealForm";

const MealManagement = props => {
  return (
    <div className="card">
      <div className="card-content grey-text">
        <span
          className="card-title"
          style={{
            fontFamily: "Blanch Caps Inline Regular",
            fontSize: "3.5rem"
          }}
        >
          DODAJ NOVI OBROK<span
            style={{ fontSize: "2rem" }}
            className="material-icons"
          >
            restaurant
          </span>
        </span>
        <MealForm />
      </div>
    </div>
  );
};

export default ReactFontFace(MealManagement, fontPrimary);
