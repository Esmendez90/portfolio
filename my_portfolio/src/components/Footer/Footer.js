import React from "react";
import "./style.css";
import { ListEl } from "../Reusable/Reusable";
import { ProgressBar } from "../Reusable/Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icons from "./icons.json";
let req;

function Footer() {
  return (
    <div id="contact" className="footer">
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
        <div>
          <p>This site was built using React</p>
          <ProgressBar
            jsPercent="55.7%"
            htmlPercent="9.0%"
            cssPercent="35.3%"
            js="Javascript"
            html="HTML"
            css="CSS"
          />

          <p className="links-container icon">
            <a
              href="https://github.com/Esmendez90/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>

          <p style={{ textAlign: "center" }}>Designed by Esteban Mendez</p>
          <p style={{ textAlign: "center", marginTop: "0" }}>2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
