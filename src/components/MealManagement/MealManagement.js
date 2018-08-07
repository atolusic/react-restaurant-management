import React, { Component } from "react";
import ReactFontFace from "react-font-face";

import blanchCapsInline from "../../assets/font/blanch_caps_inline-webfont.woff";

import { MealForm } from "./Form/MealForm";

const MealManagement = () => {
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
          DODAJ NOVI OBROK U MENI<span
            style={{ fontSize: "2rem" }}
            className="material-icons"
          >
            restaurant
          </span>
        </span>
        <MealForm />
      </div>
      <div className="card-action">
        <a href="#!">This is a link</a>
        <a href="#!">This is a link</a>
      </div>
    </div>
  );
};

let fontConfig = {
  myFont: ["blanch"],
  file: [
    {
      fontFamily: "Blanch Caps Inline Regular",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215",
      fontStyle: "normal",
      fontWeight: "normal",
      file: blanchCapsInline,
      fontType: "truetype",
      fileLocal: "Blanch Caps Inline Regular"
    }
  ]
};

export default ReactFontFace(MealManagement, fontConfig);
