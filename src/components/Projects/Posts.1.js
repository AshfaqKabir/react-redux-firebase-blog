// Main Component DAshboard ALL Post
import React, { Component, Fragment } from "react";

export default class Posts extends Component {
  render() {
    return (
      <Fragment>
        <section className="featured-posts no-padding-top">
          <div className="container">
            <div className="row d-flex align-items-stretch">
              <div className="text col-lg-7">
                <div className="text-inner d-flex align-items-center">
                  <div className="content">
                    <header className="post-header">
                      <div className="category">
                        <a href="#">Business</a>
                        <a href="#">Technology</a>
                      </div>
                      <a href="#">
                        <h2 className="h4">
                          Alberto Savoia Can Teach You About Interior
                        </h2>
                      </a>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrude consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <footer className="post-footer d-flex align-items-center">
                      <a
                        href="#"
                        className="author d-flex align-items-center flex-wrap"
                      >
                        <div className="title">
                          <span>John Doe</span>
                        </div>
                      </a>
                      <div className="date">
                        <i class="far fa-clock" />2 Months ago
                      </div>
                      <div className="comments">
                        <i class="far fa-comment-alt" />
                        12
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
              <div className="image col-lg-5">
                <img src="../assets/img/featured-pic-2.jpeg" alt="" />
              </div>
            </div>
            {/*POSts ends here*/}
            <div class="row d-flex align-items-stretch">
              <div class="image col-lg-5">
                <img src="../assets/img/featured-pic-2.jpeg" alt="..." />
              </div>
              <div class="text col-lg-7">
                <div class="text-inner d-flex align-items-center">
                  <div class="content">
                    <header class="post-header">
                      <div class="category">
                        <a href="#">Business</a>
                        <a href="#">Technology</a>
                      </div>
                      <a href="post.html">
                        <h2 class="h4">
                          Alberto Savoia Can Teach You About Interior
                        </h2>
                      </a>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrude consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt.
                    </p>
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
                          <span>John Doe</span>
                        </div>
                      </a>
                      <div class="date">
                        <i class="far fa-clock" /> 2 months ago
                      </div>
                      <div class="comments">
                        <i class="far fa-comment-alt" />
                        12
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            {/*POSts ends here*/}
            <div class="row d-flex align-items-stretch">
              <div class="text col-lg-7">
                <div class="text-inner d-flex align-items-center">
                  <div class="content">
                    <header class="post-header">
                      <div class="category">
                        <a href="#">Business</a>
                        <a href="#">Technology</a>
                      </div>
                      <a href="post.html">
                        <h2 class="h4">
                          Alberto Savoia Can Teach You About Interior
                        </h2>
                      </a>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrude consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <footer class="post-footer d-flex align-items-center">
                      <a
                        href="#"
                        class="author d-flex align-items-center flex-wrap"
                      >
                        <div class="avatar">
                          <img
                            src="img/avatar-3.jpg"
                            alt="..."
                            class="img-fluid"
                          />
                        </div>
                        <div class="title">
                          <span>John Doe</span>
                        </div>
                      </a>
                      <div class="date">
                        <i class="far fa-clock" /> 2 months ago
                      </div>
                      <div class="comments">
                        <i class="far fa-comment-alt" /> 12
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
              <div class="image col-lg-5">
                <img src="img/featured-pic-3.jpeg" alt="..." />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
