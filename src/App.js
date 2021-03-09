import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
        <List></List>
      </div>
    );
  }
}

export default App;
