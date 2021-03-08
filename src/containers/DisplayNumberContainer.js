import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

class DisplayNumberContainer extends Component {
  render() {
    return (
      <div>
        <DisplayNumber number={this.props.number} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { number: state.number };
};

export default connect(mapStateToProps)(DisplayNumberContainer);
