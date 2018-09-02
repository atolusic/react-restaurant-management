import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-wrapper orange lighten-1">
        <a
          href="#!"
          className="brand-logo"
          style={{
            marginLeft: "2rem"
          }}
        >
          Ime aplikacije
        </a>
        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down"
          style={{
            marginRight: "2rem"
          }}
        >
          <li>
            <Link to={"/"}>Pocetna</Link>
          </li>
          <li>
            <a href="#!">Registred User</a>
          </li>
          <li>
            <a href="#!">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
