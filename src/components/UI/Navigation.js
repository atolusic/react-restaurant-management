import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo/burger.png";

const Navigation = () => {
  return (
    <nav
      style={{
        height: "7.5vh",
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
      className="orange lighten-1"
    >
      <Link
        style={{
          fontFamily: "Haymaker",
          paddingLeft: "1rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center"
        }}
        to="/"
      >
        <span
          style={{
            fontSize: "1rem"
          }}
        >
          Sweet
        </span>

        <img src={Logo} alt="Logo" width="50" height="50" />

        <span
          style={{
            fontSize: "1rem",
            position: "relative"
          }}
        >
          o'mine
        </span>
      </Link>
    </nav>
  );
};

export default Navigation;
