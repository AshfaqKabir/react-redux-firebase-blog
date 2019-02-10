import React, { Component, Fragment } from "react";
import { comment } from "./data";
import Comments from "./Comments";

import { connect } from "react-redux";

class CommentList extends Component {
  // state = {
  //   comment: comment
  // };
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <div className="post-comments">
          <header>
            <h3 className="h6">
              Post Comments
              <span className="no-of-comments">(1)</span>
            </h3>
          </header>
          <div className="comment">
            {this.props.comment.map((post) => {
              return <Comments key={post.id} info={post} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    comment: state.comment.comment
  };
};

export default connect(mapStateToProps)(CommentList);
