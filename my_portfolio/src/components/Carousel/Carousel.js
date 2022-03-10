import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

import slides from "./slides.json";

function CarouselComp() {
  return (
    <Carousel>
      {slides.map(({ id, image, alt, caption }) => (
        <Carousel.Item key={id}>
          <img className="image" src={image} alt={alt} />
          <Carousel.Caption>
            <p>{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
