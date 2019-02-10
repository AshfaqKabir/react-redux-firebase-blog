import React, { Component } from "react";

export default class blogPost extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    console.log(this.props);
    let id = this.match.params.post_id;
    this.setState({
      id: id
    });
  }
  render() {
    return (
      <div>
        <h4>{this.state.id}</h4>
      </div>
    );
  }
}
