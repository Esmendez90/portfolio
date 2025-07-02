import React from "react";
import "./style.css";

function Services() {
  return (
    <>
      <section>
        <div id="services" className="services-container row-container row">
          <div className="h2-container col-sm-3">
            <div>
              <h2 style={{ color: "#4a4a4a" }}>
                Services <br />
              </h2>
            </div>
          </div>
          <div className="text-container col-sm-8">
            <ul>
              <li>📄 USCIS Form Assistance (N-400, I-130, I-485, I-693)</li>
              <li>🌐 Web Design (HTML, CSS, JavaScript, Bootstrap)</li>
              <li>🧠 AI-Powered Resume & Document Creation</li>
              <li>📝 Spanish ↔ English Document Translation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
