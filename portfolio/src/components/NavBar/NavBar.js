import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Resume from "../Resume/EstebanMendezResume.pdf"

function NavBar() {
  return (
    <>
      <section className="header-container">
        <Navbar expand="lg">
          <Container>
            <div className="logo-container">
              <img
                className="logo"
                src={'/portfolio/images/logo.png'}
                alt="logo"
              />
            </div>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="menuBars"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="xmark-container"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Navbar.Toggle>
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#works">PORTFOLIO</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
                <div className="resume-container">
                  <Nav.Link href={Resume} target="_blank">
                    RESUME
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default NavBar;
