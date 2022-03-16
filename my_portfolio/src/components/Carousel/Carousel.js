import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import slides from "./slides.json";
import ImgTag from "../Reusable/Reusable";

function CarouselComp() {
  return (
    <Carousel>
      {slides.map(({ id, image, alt, caption }) => (
        <Carousel.Item key={id}>
          <ImgTag
            containerClass="carousel-container"
            imgClass="slideImage"
            src={image}
            alt={alt}
          />

          <Carousel.Caption>
            <p className="caption">{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
