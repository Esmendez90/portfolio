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
      <div className="header-container">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="logo">
              EM
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="xmark-container">
                <FontAwesomeIcon icon={faXmark} />
              </Navbar.Toggle>
                <Nav.Link href="/">
                  HOME{" "}
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                </Nav.Link>
                <Nav.Link href="#portfolio">
                  PORTFOLIO{" "}
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faFolder} />
                  </span>
                </Nav.Link>
                <Nav.Link href="#contact">
                  CONTACT
                  <span className="fontAw-icon">
                    <FontAwesomeIcon icon={faCommentDots} />
                  </span>
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
