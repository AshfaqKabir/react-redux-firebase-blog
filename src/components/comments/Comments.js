import React, { Component, Fragment } from "react";

export default class Comments extends Component {
  render() {
    const { name, date, body } = this.props.info;

    return (
      <Fragment>
        <div className="comment">
          <div className="comment-header d-flex justify-content-between">
            <div className="user d-flex align-items-center">
              <div className="image">
                <img
                  src="img/user.svg"
                  alt="..."
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="title">
                <strong>{name}</strong>
                <span className="date">{date}</span>
              </div>
            </div>
          </div>
          <div className="comment-body">
            <p>{body}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
