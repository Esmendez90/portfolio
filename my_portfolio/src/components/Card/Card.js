import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import cardsProject from "./cardsProjects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let req = require("@fortawesome/free-brands-svg-icons");
let req2 = require("@fortawesome/free-solid-svg-icons");

function CardComp() {
  return (
    <>
      <div id="portfolio" className="card-container">
        <h2>Some Sites I've Designed</h2>
        {cardsProject.map(
          ({
            id,
            image,
            alt,
            title,
            text,
            btnLink,
            repoLink,
            js,
            html,
            css,
            jsPercent,
            htmlPercent,
            cssPercent,
            target,
            className,
            icon,
            icon2,
            icon3,
          }) => (
            <Card key={id}>
              <div className="port-img-container row">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + [image]}
                  alt={alt}
                />
              </div>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>

                <div className="languages-bar">
                  <Card.Title>Languages</Card.Title>
                  <span className="progress">
                    <span
                      className="progress-item js-bar"
                      style={{ width: jsPercent }}
                    ></span>
                    <span
                      className="progress-item html-bar"
                      style={{ width: htmlPercent }}
                    ></span>
                    <span
                      className="progress-item css-bar"
                      style={{ width: cssPercent }}
                    ></span>
                  </span>
                  <ul className="lang-list-container">
                    <li className="item js-class">
                      {js} <span>{jsPercent}</span>
                    </li>
                    <li className="item html-class">
                      {html} <span>{htmlPercent}</span>
                    </li>
                    <li className="item css-class">
                      {css} <span>{cssPercent}</span>
                    </li>
                  </ul>
                </div>

                <div className="btn-container">
                  <ul>
                    <li className={className}>
                      <a href={repoLink} target={target}>
                        <FontAwesomeIcon icon={req[icon]} />
                      </a>
                    </li>
                    <li className={className}>
                      <a href={btnLink} target={target}>
                        <FontAwesomeIcon icon={req2[icon2]} />
                      </a>
                    </li>
                    <li className={className}>
                      <button>
                        <FontAwesomeIcon icon={req2[icon3]} />
                      </button>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </>
  );
}

export default CardComp;
