import React from "react";
import { Nav} from "react-bootstrap";

function Navtag(props) {
    // console.log(props);
  return(
  <Nav className={props.className}>
    <Nav.Link href={props.href}>{props.children}</Nav.Link>
  </Nav>
  );
}

export default Navtag;
