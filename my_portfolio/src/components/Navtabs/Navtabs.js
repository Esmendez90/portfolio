import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";

class Navtabs extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Bootstrap Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav>
                  <Nav className="mr-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                  </Nav>
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
