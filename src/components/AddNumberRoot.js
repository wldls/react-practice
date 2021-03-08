import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "../module/number";
import AddNumber from "./AddNumber";

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber
          onClick={(size) => {
            this.props.increment(size);
          }}
        />
      </div>
    );
  }
}

export default connect(null, { increment })(AddNumberRoot);
