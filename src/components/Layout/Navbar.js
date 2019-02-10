import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

export default class Navbars extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="navbar-header d-flex align-items-center justify-content-between">
            <Link to="/">
              <img src={logo} />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="navbar-toggler">
            <span />
            <span />
            <span />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item">
                <NavLink to="/" className="nav-link">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </NavItem>
              <div className="navbar-text">
                <a href="#" className="search-btn">
                  <i className="fas fa-search" />
                </a>
              </div>
              <ul className="langs navbar-text">
                <a href="#" className="active">
                  EN
                </a>
                <span> </span>
                <a href="#">ES</a>
              </ul>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
