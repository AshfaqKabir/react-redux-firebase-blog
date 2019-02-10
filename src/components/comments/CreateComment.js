import React, { Component, Fragment } from "react";

export default class CreateComment extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Fragment>
        <div class="add-comment">
          <header>
            <h3 class="h6">Leave a reply</h3>
          </header>
          <form onSubmit={this.onSubmit} class="commenting-form">
            <div class="row">
              <div class="form-group col-md-12">
                <textarea
                  name="usercomment"
                  id="body"
                  placeholder="Type your comment"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-12">
                <button
                  type="submit"
                  class="btn btn-secondary"
                  onClick={this.props.postComment}
                >
                  Submit Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
