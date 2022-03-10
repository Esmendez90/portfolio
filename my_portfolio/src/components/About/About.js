import React from "react";
import "./style.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="img-container">
          <img
            className="img-esteban"
            src="Images/esteban.jpeg"
            alt="Esteban Mendez"
          />
        </div>
        <h1>ABout me</h1>
        <p>Some deep message that moves employers to hire me.</p>
      </div>
    </>
  );
}

export default About;
