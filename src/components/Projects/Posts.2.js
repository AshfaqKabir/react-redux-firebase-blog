// Main Component DAshboard ALL Post
import React, { Component, Fragment } from "react";

export default class Posts extends Component {
  render() {
    const { data, tags } = this.props;

    const postList = data.map((post) => {
      return (
        <div className="row d-flex align-items-stretch">
          <div className="text col-lg-7">
            <div className="text-inner d-flex align-items-center">
              <div className="content">
                <header className="post-header">
                  <div className="category">
                    {tags.map((tag) => {
                      return <a href={tag}>{tag}</a>;
                    })}
                  </div>
                  <a href="#">
                    <h2 className="h4">{post.title}</h2>
                  </a>
                </header>
                <p>{post.body}</p>
                <footer className="post-footer d-flex align-items-center">
                  <a
                    href="#"
                    className="author d-flex align-items-center flex-wrap"
                  >
                    <div className="title">
                      <span>{post.author}</span>
                    </div>
                  </a>
                  <div className="date">
                    <i class="far fa-clock" />2 Months ago
                  </div>
                  <div className="comments">
                    <i class="far fa-comment-alt" />
                    {post.comment}
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <div className="image col-lg-5">
            <img src={post.thumb} alt="" />
          </div>
        </div>
      );
    });
    const postListRewind = data.map((post) => {
      return (
        <div class="row d-flex align-items-stretch">
          <div class="image col-lg-5">
            <img src={post.thumb} alt="" />
          </div>
          <div class="text col-lg-7">
            <div class="text-inner d-flex align-items-center">
              <div class="content">
                <header class="post-header">
                  <div class="category">
                    {tags.map((tag) => {
                      return <a href={tag}>{tag}</a>;
                    })}
                  </div>
                  <a href="post.html">
                    <h2 class="h4">{post.title}</h2>
                  </a>
                </header>
                <p>{post.body}</p>
                <footer class="post-footer d-flex align-items-center">
                  <a
                    href="#"
                    class="author d-flex align-items-center flex-wrap"
                  >
                    <div class="avatar">
                      <img
                        src="../assets/img/avatar-2.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="title">
                      <span>{post.author}</span>
                    </div>
                  </a>
                  <div class="date">
                    <i class="far fa-clock" /> 2 months ago
                  </div>
                  <div class="comments">
                    <i class="far fa-comment-alt" />
                    {post.comment}
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <section className="featured-posts no-padding-top">
          <div className="container">
            {postList}
            {postListRewind}
        
            {/*POSts ends here*/}
          </div>
        </section>
      </Fragment>
    );
  }
}
