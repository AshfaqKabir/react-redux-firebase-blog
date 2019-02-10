import React, { Component, Fragment } from "react";

export default class LatestBlogs extends Component {
  render() {
    return (
      <Fragment>
        {/*Latest Posts */}
        <section className="latest-posts">
          <div className="container">
            <header>
              <h2>Latest from the blog</h2>
              <p className="text-big">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </header>
            <div className="row">
              <div className="post col-md-4">
                <div className="post-thumbnail">
                  <a href="post.html">
                    <img src="../assets/img/blog-1.jpg" alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category">
                      <a href="#">Business</a>
                    </div>
                  </div>
                  <a href="post.html">
                    <h3 className="h4">Ways to remember your important ideas</h3>
                  </a>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="post col-md-4">
                <div className="post-thumbnail">
                  <a href="post.html">
                    <img src="../assets/img/blog-2.jpg" alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category">
                      <a href="#">Technology</a>
                    </div>
                  </div>
                  <a href="post.html">
                    <h3 className="h4">
                      Diversity in Engineering: Effect on Questions
                    </h3>
                  </a>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="post col-md-4">
                <div className="post-thumbnail">
                  <a href="post.html">
                    <img src="../assets/img/blog-3.jpg" alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category">
                      <a href="#">Financial</a>
                    </div>
                  </div>
                  <a href="post.html">
                    <h3 className="h4">
                      Alberto Savoia Can Teach You About Interior
                    </h3>
                  </a>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
