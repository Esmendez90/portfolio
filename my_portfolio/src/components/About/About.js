import React from "react";
import "./style.css";
import ImgTag from "../Reusable/Reusable";

function About() {
  return (
    <>
      <div className="about-container">
        <p>Hi there! My name is</p>
        <h1 className="my-name">Esteban Mendez</h1>
        <h2>... and I love designing webpages.</h2>
        <ImgTag
            containerClass="img-container"
            imgClass="img-esteban"
            src={process.env.PUBLIC_URL + "/Images/esteban.jpeg"}
            alt="Esteban Mendez"
          />
        <p>
          I am a front-end developer, familiar with back-end, knowledgeable of
          HTML, CSS, Javascript, Git/Github, jQuery, Bootstrap, node.js,
          express.js, mysql, and React. I am truly enthusiastic about designing
          and developing web pages, solving problems, and learning new
          technologies. One of my strongest assets is that I do not mind going
          the extra mile, whether it means helping a stranger find the nearest
          train station or spending hours trying to fix that one bug in my code.
          Overall, I believe that consistency, hard work, and patience will
          eventually lead to success.
        </p>
      </div>
    </>
  );
}

export default About;
