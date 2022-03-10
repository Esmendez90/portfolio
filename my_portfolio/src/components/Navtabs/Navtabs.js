import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Navtag from "./Navtag";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";

class Navtabs extends React.Component {
  render() {
    return (
      <div className="row">
        <main className="col-md-12 main-container">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Esteban Mendez</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navtag className="home" href="/">
                  HOME{" "}
                </Navtag>
                <Navtag className="projects" href="/projects">
                  PORTFOLIO
                </Navtag>
              </Navbar.Collapse>
            </Navbar>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </Router>
        </main>
      </div>
    );
  }
}

export default Navtabs;
