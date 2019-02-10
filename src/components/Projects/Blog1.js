import React, { Fragment } from "react";

import pic1 from "../../assets/img/blog-post-3.jpeg";
import pic2 from "../../assets/img/featured-pic-3.jpeg";
import avatar from "../../assets/img/avatar-1.jpg";

import { Container } from "reactstrap";

const Blog = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <Fragment>
      <Container>
        <h1>{id}</h1>
        <main className="post blog-post col-lg-8">
          <div className="container">
            <div className="post-thumbnail">
              <img src={pic1} alt="..." className="img-fluid" />
            </div>
            <div className="post-details">
              <div className="post-meta d-flex justify-content-between">
                <div className="category">
                  <a href="#">Business</a>
                  <a href="#">Financial</a>
                </div>
              </div>
              <h1>
                Diversity in Engineering: The Effect on Questions
                <a href="#">
                  <i className="fa fa-bookmark-o" />
                </a>
              </h1>
              <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
                <a
                  href="#"
                  className="author d-flex align-items-center flex-wrap"
                >
                  <div className="avatar">
                    <img src={avatar} alt="..." className="img-fluid" />
                  </div>
                  <div className="title">
                    <span>John Doe</span>
                  </div>
                </a>
                <div className="d-flex align-items-center flex-wrap">
                  <div className="date">
                    <i className="far fa-clock" /> 2 months ago
                  </div>
                  <div className="views">
                    <i class="far fa-eye" /> 500
                  </div>
                  <div className="comments meta-last">
                    <i className="far fa-comment-alt" />
                    12
                  </div>
                </div>
              </div>
              <div className="post-body">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  {" "}
                  <img src={pic2} alt="..." className="img-fluid" />
                </p>
                <h3>Lorem Ipsum Dolor</h3>
                <p>
                  div Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda temporibus iusto voluptates deleniti similique rerum
                  ducimus sint ex odio saepe. Sapiente quae pariatur ratione
                  quis perspiciatis deleniti accusantium
                </p>
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <p>
                  quasi nam. Libero dicta eum recusandae, commodi, ad, autem at
                  ea iusto numquam veritatis, officiis. Accusantium optio minus,
                  voluptatem? Quia reprehenderit, veniam quibusdam provident,
                  fugit iusto ullam voluptas neque soluta adipisci ad.
                </p>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    posts: state.post.find((post) => post.id === id)
  };
};

export default connect(mapStateToProps)(Blog);
