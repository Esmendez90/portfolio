import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Navtag from "./Navtag";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";

class Navtabs extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 navbar-container">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Bootstrap Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Navtag className="home" href="/">
                    Home
                  </Navtag>
                  <Navtag className="projects" href="/projects">
                    Projects
                  </Navtag>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Projects />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Navtabs;
