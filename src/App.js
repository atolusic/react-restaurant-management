import React, { Component } from "react";

import "./App.css";

import Layout from "./hoc/Layout";
import AdminPanel from "./components/AdminPanel/AdminPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <AdminPanel />
        </Layout>
      </div>
    );
  }
}

export default App;
