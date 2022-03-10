import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import slides from "./slides.json";
import ImageTag from "../ImageTag";

function CarouselComp() {
  return (
    <Carousel>
      {slides.map(({ id, image, alt, caption }) => (
        <Carousel.Item key={id}>
          {/* <img className="slideImage" src={image} alt={alt} /> */}
          <ImageTag imgClass="slideImage" src={image} alt={alt} />
          <Carousel.Caption>
            <p>{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
