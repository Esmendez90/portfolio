import React from "react";
import ProgressBar from "./ProgressBar";
import "./style.css";

function About() {
  return (
    <>
      <section>
        <div id="about" className="about-container row-container row">
          <div className="h2-container col-sm-3">
            <div>
              <h2 style={{ color: "#4a4a4a" }}>
                A little bit <br />
                about me.
              </h2>
            </div>
          </div>
          <div className="text-container col-sm-8">
            <p>
              I'm a web designer that is truly enthusiastic about creating
              websites, solving problems, and learning new technologies. I am
              knowledgeable of HTML, CSS, Javascript, jQuery, Bootstrap, some
              React and photoshop.
            </p>
            <p>
              One of my strongest assets is that I do not mind going the extra
              mile, whether it means helping a stranger find the nearest train
              station or spending hours trying to fix that one bug in my code.
              Overall, I believe that consistency, hard work, and patience will
              eventually lead to success.
            </p>

            <ProgressBar />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
