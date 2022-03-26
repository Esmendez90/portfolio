import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="row">
        <main className="col-md-12 main-container">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/portfolio/">Esteban Mendez</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="home">
                  <Nav.Link href="/portfolio/">HOME</Nav.Link>
                </Nav>
                <Nav className="portfolio">
                  <Nav.Link href="/portfolio/projects">PORTFOLIO</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Routes>
            <Route path="/portfolio/" exact element={<Home />} />
              <Route path="/portfolio/projects" exact element={<Portfolio />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
