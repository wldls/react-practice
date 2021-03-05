import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
      </div>
    );
  }
}

export default App;
