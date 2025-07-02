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
              I’m a tech-savvy, bilingual professional based in the U.S. with a
              passion for creating polished, user-friendly websites and
              documents. I help individuals and small businesses with web
              design, immigration forms, translations, and professional resumes.
              I’m committed to quality, detail, and always willing to go the
              extra mile to get the job done right.
            </p>

            {/* <ProgressBar /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
