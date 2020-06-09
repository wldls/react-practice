import React, { Component } from "react";

class UseClass extends Component {
  state = {
    count: 0
  };
  onIncrease = n => {
    this.setState({
      count: n
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>use Class</h3>
        <p>{count}</p>
        <button
          type="button"
          onClick={() => {
            this.onIncrease(count + 1);
          }}
        >
          increase
        </button>
      </div>
    );
  }
}

export default UseClass;
