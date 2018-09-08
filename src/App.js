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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/test" component={LandingPage} />
            <Route path="/menu" component={Menu} />
            <Layout>
              <Route exact path="/" component={AdminPanel} />
              <Route path="/meals/:id" component={MealDetails} />
            </Layout>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default ReactFontFace(App, fontPrimary);
