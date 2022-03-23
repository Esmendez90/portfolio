import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Navtag from "./Navtag";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Index";

class Navtabs extends React.Component {
  render() {
    return (
      <div className="row">
        <main className="col-md-12 main-container">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/portfolio/">Esteban Mendez</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navtag className="home" href="/portfolio/">
                  HOME
                </Navtag>
                <Navtag className="portfolio" href="/portfolio/projects/">
                  PORTFOLIO
                </Navtag>
              </Navbar.Collapse>
            </Navbar>

            <Routes>
              <Route exact path="/portfolio/" element={<Home />} />
              <Route exact path="/portfolio/projects/" element={<Portfolio />} />
            </Routes>
          </Router>
        </main>
      </div>
    );
  }
}

export default Navtabs;
