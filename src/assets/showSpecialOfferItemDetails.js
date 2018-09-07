import React from "react";

// posebna ponuda images
import Coke from "./imgs/pp/Coke.png";
import Pivo from "./imgs/pp/Pivo.png";
import Sok from "./imgs/pp/Sok.png";
import Donut from "./imgs/pp/Donut.png";
import Palacinka from "./imgs/pp/Palacinka.png";

const showSpecialOfferItemDetails = item => {
  let alt = "slika";
  switch (item) {
    case "Pivo":
      return (
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img width={50} height={50} src={Pivo} alt={alt} />
          <span style={{ marginLeft: ".5rem" }}>Pivo</span>
        </div>
      );
    case "Donut":
      return (
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img width={50} height={50} src={Donut} alt={alt} />
          <span style={{ marginLeft: ".5rem" }}>Donut</span>
        </div>
      );
    case "Sok":
      return (
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img width={40} height={60} src={Sok} alt={alt} />
          <span style={{ marginLeft: ".5rem" }}>Juice</span>
        </div>
      );
    case "Palacinka":
      return (
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img width={50} height={30} src={Palacinka} alt={alt} />
          <span style={{ marginLeft: ".5rem" }}>Palacinka</span>
        </div>
      );
    case "Coke":
      return (
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img width={40} height={60} src={Coke} alt={alt} />
          <span style={{ marginLeft: ".5rem" }}>Cola</span>
        </div>
      );
  }
};

export default showSpecialOfferItemDetails;
