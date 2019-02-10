// Main Component DAshboard ALL Post
import React, { Component, Fragment } from "react";

class Post extends Component {
  render() {
    const { title, body, author, comment, thumb } = this.props.info;

    return (
      <Fragment>
        <div className="row d-flex align-items-stretch">
          <div className="text col-md-7">
            <div className="text-inner d-flex align-items-center">
              <div className="content">
                <header className="post-header">
                  <div className="category">
                    {/*tags.map((tag) => {
                          return <a href={tag}>{tag}</a>;
                        })*/}
                  </div>
                  <a href="#">
                    <h2 className="h4">{title}</h2>
                  </a>
                </header>
                <p>{body}</p>
                <footer className="post-footer d-flex align-items-center">
                  <a
                    href="#"
                    className="author d-flex align-items-center flex-wrap"
                  >
                    <div className="title">
                      <span>{author}</span>
                    </div>
                  </a>
                  <div className="date">
                    <i className="far fa-clock" />2 Months ago
                  </div>
                  <div className="comments">
                    <i className="far fa-comment-alt" />
                    {comment}
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-thumbnail">
              <img src={thumb} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Post;
