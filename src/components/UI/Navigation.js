import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo/logo.png";

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
          fontFamily: "Blanch Caps Inline Regular",
          paddingLeft: "1rem",
          fontWeight: 500
        }}
        to="/"
      >
        <span style={{ fontSize: "3rem" }}>Sweet</span>
        <span style={{ color: "#333", fontSize: "3.5rem" }}>BURGER</span>
        <span style={{ fontSize: "3rem" }}>o' mine</span>
      </Link>
    </nav>
  );
};

export default Navigation;
