import React from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faCommentDots,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Resume from "../Resume/Resume-Esteban-Mendez.pdf";

function Header() {
  return (
    <>
      <div className="header-container" id="home">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="logo">
              EM
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuBars" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="xmark-container"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Navbar.Toggle>
                <Nav.Link href="#home">
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  HOME
                </Nav.Link>
                <Nav.Link href="#portfolio">
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faFolder} />
                  </span>
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link href="#contact">
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faCommentDots} />
                  </span>
                  CONTACT
                </Nav.Link>
                <div className="resume-container">
                  <Nav.Link href={Resume} target="_blank">
                    RESUME
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
