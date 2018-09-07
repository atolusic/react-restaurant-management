import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import Layout from "./hoc/Layout";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import MealDetails from "./components/MealManagement/Meals/MealDetails";
import Menu from "./components/UserPanel/UserPanel";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
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

export default App;
