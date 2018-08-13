import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import Layout from "./hoc/Layout";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import MealDetails from "./components/MealManagement/Meals/MealDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={AdminPanel} />
              <Route path="/meals/:id" component={MealDetails} />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
