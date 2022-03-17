import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import cardsProject from "./cardsProjects.json";

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
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardComp;
