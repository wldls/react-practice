import React, { Component } from "react";
import UseClass from "./UseClass";
import UseHook from "./UseHook";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <UseClass />
        <p>==================================</p>
        <UseHook />
      </div>
    );
  }
}

export default App;
