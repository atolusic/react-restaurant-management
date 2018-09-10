import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactFontFace from "react-font-face";
import "./App.css";

import { fontPrimary } from "./assets/font/font";

import Layout from "./hoc/Layout";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import MealDetails from "./components/MealManagement/Meals/MealDetails";
import Menu from "./components/UserPanel/UserPanel";
import LandingPage from "./components/UI/LandingPage/LandingPage";
import Checkout from "./components/UserPanel/Checkout/Checkout";
import OrderStats from "./components/AdminPanel/OrderStats/OrderStats";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/menu" component={Menu} />
            <Route path="/menu/checkout" component={Checkout} />
            <Layout>
              <Route exact path="/adminpanel" component={AdminPanel} />
              <Route exact path="/adminpanel/orders" component={OrderStats} />
              <Route path="/meals/:id" component={MealDetails} />
            </Layout>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default ReactFontFace(App, fontPrimary);
