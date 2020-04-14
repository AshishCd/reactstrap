import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { Images } from "../assets/img";
import { NavLink } from "react-router-dom";

//Components

class NavbarScreen extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar color="light" light sticky="top" expand="md">
        <div className="container-fluid">
          <NavbarBrand href="/">
            <img alt="logo" src={Images.Logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/connect">
                  Connect
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarScreen;
