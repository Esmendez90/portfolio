import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import cardsProject from "./cardsProjects.json";

function CardComp() {
  return (
    <>
      {cardsProject.map(
        ({
          id,
          image,
          alt,
          title,
          text,
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
              <div>
                <Card.Img variant="top" src={image} alt={alt} />
              </div>
              <Button variant="primary">Go somewhere</Button>
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
                  <li className="item js-class">{js} <span>{jsPercent}</span></li>
                  <li className="item html-class">{html} <span>{htmlPercent}</span></li>
                  <li className="item css-class">{css} <span>{cssPercent}</span></li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        )
      )}
    </>
  );
}

export default CardComp;
