import React from "react";
import Resume from "../Resume/EstebanMendezResume.pdf";
import "./style.css";

function Contact() {
  return (
    <>
      <section>
        <div id="contact" className="contact-container row-container row">
          <div className="h2-container col-sm-3">
            <div>
              <h2 style={{ color: "#4a4a4a" }}>
                Want a website?
                <br />
                Contact me.
              </h2>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Location</h5>
                <p>New York, NY</p>
              </div>
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Email</h5>
                <a href="mailto:edmendezn@gmail.com">edmendezn@gmail.com</a>
              </div>

              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Phone</h5>
                <a href="tel:2013601905">(201) 360-1905</a>
              </div>

              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h5>Resume</h5>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  View my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
