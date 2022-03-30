import { React, useState, useEffect } from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import Resume from "../Resume/Resume-Esteban-Mendez.pdf";

function Header() {
  const [pos, setPos] = useState("static");
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      console.log("it is moving", scrolled);
      if (scrolled >= (scrolled + 5) || scrolled <= (scrolled - 5)) {
        console.log("how much it is moving", scrolled + 5);
        setPos("moved");
      } else {
        setPos("static");
      }
    });
  }, []);
  return (
    <>
      <div
        className="header-container"
        // style={{
        //   display: pos === "static" ? "none" : "block",
        // }}
      >
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="logo">
              EM
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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
