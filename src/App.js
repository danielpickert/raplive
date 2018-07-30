import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Webcam from "react-webcam";

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Rap Live</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Battle
            </NavItem>
            <NavItem eventKey={2} href="#">
              Profile
            </NavItem>
            <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <header className="App-header">
          <img
            src={"http://www.raysdvds.org/headshots/cast/Eminem.jpg"}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to Rap Live</h1>
        </header>

        <body>
          <div class="webcam">
            <Webcam />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
