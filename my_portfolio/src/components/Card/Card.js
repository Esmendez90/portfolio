import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";
import cardsProject from "./cardsProjects.json";
import barItems from "./barItems.json";
import { ListEl } from "../Reusable/Reusable";

function CardComp() {
  return (
    <>
      {cardsProject.map(({ id, image, alt, title, text }) => (
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
                <span className="progress-item js-bar"></span>
                <span className="progress-item css-bar"></span>
                <span className="progress-item html-bar"></span>
              </span>
              <ul className="lang-list-container">
                {barItems.map(({ id, itemClass, href, target, language }) => (
                  <div className="item-container" key={id}>
                    <FontAwesomeIcon icon={faCircle} />
                    <ListEl
                      key={id}
                      liClass={itemClass}
                      href={href}
                      target={target}
                      children={language}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardComp;
