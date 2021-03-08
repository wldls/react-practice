import React, { Component } from "react";

class DisplayNumber extends Component {
  render() {
    const { number } = this.props.number;
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+"></input>
        <input type="text" value={number} readOnly></input>
      </div>
    );
  }
}

export default DisplayNumber;
