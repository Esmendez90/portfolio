import React from "react";
import "./style.css";
import { ListEl } from "../Reusable/Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./icons.json";
let req;

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>CONNECT WITH ME</p>

        <ul>
          {Icons.map(({ id, className, website, target, icon }) => {
            icon === "faGithub" || icon === "faLinkedin"
              ? (req = require("@fortawesome/free-brands-svg-icons"))
              : (req = require("@fortawesome/free-solid-svg-icons"));

            return (
              <ListEl
                key={id}
                liClass={className}
                href={website}
                target={target}
                children={<FontAwesomeIcon icon={req[icon]} />}
              />
            );
          })}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
