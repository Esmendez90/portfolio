import React from "react";
import "../../index.css";

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
        <p>
          I am a front-end developer, familiar with back-end, knowledgeable of
          HTML, CSS, Javascript, Git/Github, jQuery, Bootstrap, node.js,
          express.js, mysql, and React. I am truly enthusiastic about designing
          and developing web pages, solving problems, and learning new
          technologies. One of my strongest assets is that I do not mind going
          the extra mile, whether it means helping a stranger find the nearest
          train station or spending hours trying to fix that one bug in my code.
          Overall, I believe that consistency, hard work, and patience will
          eventually lead to success. Click here to view my resume.
        </p>
      </div>
    </>
  );
}

export default About;
