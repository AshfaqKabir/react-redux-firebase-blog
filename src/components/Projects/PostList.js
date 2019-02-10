import React, { Component } from "react";
import { post } from "../../data";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Post from "./Post";

class PostList extends Component {
  render() {
    return (
      <section className="featured-posts no-padding-top">
        <div className="container">
          {this.props.posts.data.map((post) => {
            return (
              <Link to={"/" + post.id} key={post.id}>
                <Post info={post} />
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.post
  };
};

export default connect(mapStateToProps)(PostList);
