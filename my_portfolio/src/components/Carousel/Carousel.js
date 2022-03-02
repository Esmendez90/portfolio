import React from "react";

import { Carousel } from "react-bootstrap";

import slides from "./slides.json";

function CarouselComp() {
  return (
    <Carousel>
      {slides.map(({ id, image, alt, header, caption }) => (
        <Carousel.Item key={id}>
          <img className="d-block w-100" src={image} alt={alt} />
          <Carousel.Caption>
            <h3>{header}</h3>
            <p>{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
