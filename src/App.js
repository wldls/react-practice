import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      Hello World
      <FuncComp initNumber="2"></FuncComp>
      <ClassComp initNumber="2"></ClassComp>
    </div>
  );
}

function setRandom() {
  return Math.floor(Math.random() * 10) + 1;
}

function FuncComp(props) {
  const [count, setCount] = useState(props.initNumber);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>{count}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setCount(setRandom());
        }}
      />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>{this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: setRandom() });
          }}
        />
      </div>
    );
  }
}

export default App;
