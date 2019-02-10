import React, { Component } from "react";
import BgImg from "../../assets/img/hero.jpg";

import {animateScroll as scroll,} from 'react-scroll'

export default class Hero extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            background: `url(${BgImg})`,
            backgroundSize: " cover",
            backgroundPosition: "center center"
          }}
          className="hero"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1>{this.props.title}</h1>
                <a href="#" className="hero-link">
                  {this.props.btn_title}
                </a>
              </div>
            </div>
            <a onClick={() => scroll.scrollTo("650")} className="continue link-scroll">
              <i className="fas fa-long-arrow-alt-down" />
              Scroll Down
            </a>
          </div>
        </section>
      </div>
    );
  }
}
