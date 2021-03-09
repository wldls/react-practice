import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../module/post";

class List extends Component {
  state = {
    list: null,
  };

  async loadList() {
    try {
      await this.props.getPost(1);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadList();
  }

  render() {
    if (!this.props.data) {
      return <div>list</div>;
    }
    const { title, body } = this.props.data;
    return (
      <div>
        <h2>tite: {title}</h2>
        <h2>body: {body}</h2>
      </div>
    );
  }
}

export default connect(
  ({ post }) => {
    return { data: post.data };
  },
  { getPost }
)(List);
