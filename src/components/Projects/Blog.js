import React, { Component, Fragment } from "react";

import pic2 from "../../assets/img/featured-pic-3.jpeg";
import avatar from "../../assets/img/avatar-1.jpg";

import CommentList from "../comments/CommentList";
import CreateComment from "../comments/CreateComment";

import { connect } from "react-redux";

import { Container } from "reactstrap";

class Blog extends Component {
  handleClick = () => {
    this.props.addComment(this.props.posts.id)
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Container>
          <main className="post blog-post col-lg-8">
            <div className="container">
              <div className="post-single">
                <div className="post-thumbnail">
                  <img
                    src={this.props.posts.thumb}
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="category">
                      <a href="#">Business</a>
                      <a href="#">Financial</a>
                    </div>
                  </div>
                  <h1>
                    {this.props.posts.title}
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
                        <span>{this.props.posts.author}</span>
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
                        {this.props.posts.comment}
                      </div>
                    </div>
                  </div>
                  <div className="post-body">
                    <p className="lead">{this.props.posts.body}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      {" "}
                      <img src={pic2} alt="..." className="img-fluid" />
                    </p>
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>
                      div Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Assumenda temporibus iusto voluptates deleniti
                      similique rerum ducimus sint ex odio saepe. Sapiente quae
                      pariatur ratione quis perspiciatis deleniti accusantium
                    </p>
                    <blockquote className="blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                    <p>
                      quasi nam. Libero dicta eum recusandae, commodi, ad, autem
                      at ea iusto numquam veritatis, officiis. Accusantium optio
                      minus, voluptatem? Quia reprehenderit, veniam quibusdam
                      provident, fugit iusto ullam voluptas neque soluta
                      adipisci ad.
                    </p>
                  </div>
                </div>
                <CommentList />
                <CreateComment postComment={this.handleClick}/>
              </div>
            </div>
          </main>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  const posts = state.post.post.data.find((post) => post.id == id);
  // console.log(posts);

  return {
    posts: posts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (id) => {
      dispatch({ type: "ADD_COMMENT", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
