import React, { Component } from "react";

export default class Intro extends Component {
  state = {
    intro: {
      title: "Some great intro here",
      body1: "Place a nice",
      body2: "here",
      body3:
        "Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderi.",
      bold1: "introduction",
      bold2: "to catch reader's attention"
    }
  };
  render() {
    const { title, body1, body2, body3, bold1, bold2 } = this.state.intro;
    return (
      <section className="intro" ref="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="h3">{title}</h2>
              <p className="text-big">
                {body1}
                <strong>{bold1} </strong> {body2}
                <strong> {bold2} </strong>. {body3}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
