import React from "react";
import { ListEl } from "../Reusable/Reusable";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>CONNECT WITH ME</p>
        <ListEl 
        liClass="list-container"
        href=""
        children="Gmail"
        />

      </footer>
    </div>
  );
}

export default Footer;
