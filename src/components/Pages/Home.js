import React, { Component, Fragment } from "react";

import Hero from "../Layout/Hero";
import Intro from "../Layout/Intro";
import PostList from "../Projects/PostList";
import Divider from "../Layout/Divider";
import LatestBlogs from "../Layout/LatestBlogs";


export default class Home extends Component {
  state = {
    hero: {
      title: "Bootstrap 4 Blog - A free template by Bootstrap Temple",
      btn: "Discover More"
    }
  };
  render() {
    const { hero } = this.state;
    return (
      <Fragment>
        <Hero title={hero.title} btn_title={hero.btn} />
        <Intro />
        <PostList />
        <Divider />
        <LatestBlogs />
      </Fragment>
    );
  }
}
