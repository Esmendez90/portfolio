import React from "react";
import "./style.css";
import { ListEl } from "../Reusable/Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LangIcons from "./banner.json";
let req = require("@fortawesome/free-brands-svg-icons");

function Banner() {
  return (
    <div className="banner">
      <p>
        I am a front-end developer, familiar with back-end, knowledgeable of
        HTML, CSS, Javascript, Git/Github, jQuery, Bootstrap, node.js,
        express.js, mysql, and some React.
      </p>
      <ul>
        {LangIcons.map(({ id, className, website, target, icon }) => {
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
    </div>
  );
}

export default Banner;
