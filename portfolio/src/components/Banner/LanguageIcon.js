import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneFlip
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function LanguageIcon() {
  return (
    <>
      <ul className="list-inline">
        <li>
          <a
            href="https://www.linkedin.com/in/esteban-mendez-63515290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>

        <li>
          <a href="https://github.com/Esmendez90" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:edmendezn@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="tel:2013601905" target="_self">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </a>
        </li>
      </ul>
    </>
  );
}

export default LanguageIcon;
