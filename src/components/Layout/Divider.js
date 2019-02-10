import React, { Component } from "react";
import pic from "../../assets/img/divider-bg.jpg";


export default class Divider extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            background: `url(${pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundAttachment: "fixed"
          }}
          className="divider"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
                <a href="#" className="hero-link">
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
