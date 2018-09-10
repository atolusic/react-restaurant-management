import React, { Fragment } from "react";
import ReactFontFace from "react-font-face";

import Navigation from "../components/UI/Navigation/Navigation";

import { fontSecondary } from "../assets/font/font";

const Layout = props => {
  const { children } = props;
  return (
    <Fragment>
      <Navigation />
      {children}
    </Fragment>
  );
};

export default ReactFontFace(Layout, fontSecondary);
