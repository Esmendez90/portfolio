import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import cardsProject from "./cardsProjects.json";

function CardComp() {
  return (
    <>
      <div className="card-container">
        {cardsProject.map(
          ({
            id,
            image,
            alt,
            title,
            text,
            btnLink,
            js,
            html,
            css,
            jsPercent,
            htmlPercent,
            cssPercent,
          }) => (
            <Card key={id}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <div className="port-img-container row">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + [image]}
                    alt={alt}
                  />
                </div>

                <div className="btn-container">
                  <Button variant="primary" href={btnLink} target="_blank">
                    See Website
                  </Button>
                </div>
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
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </>
  );
}

export default CardComp;
