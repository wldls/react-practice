// import React, { Component } from "react";
import { connect } from "react-redux";
// import store from "../store";
import AddNumber from "../components/AddNumber";

// class AddNumberContainer extends Component {
//   render() {
//     return (
//       <div>
//         <AddNumber
//           onClick={this.props.onClick}
//           // onClick={(size) => {
//           //   store.dispatch({ type: "INCREMENT", size: size });
//           // }}
//         />
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onClick(size) {
      dispatch({ type: "INCREMENT", size });
    },
  };
};
export default connect(null, mapDispatchToProps)(AddNumber);
