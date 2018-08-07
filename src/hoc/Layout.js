import React, { Component, Fragment } from "react";

import Navigation from "../components/UI/Navigation";

const Layout = props => {
  const { children } = props;
  return (
    <Fragment>
      <Navigation />
      {children}
    </Fragment>
  );
};

export default Layout;
