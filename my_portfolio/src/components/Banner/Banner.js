import React from "react";
import LanguageIcon from "./LanguageIcon";
import "./style.css";

function Banner() {
  return (
    <>
      <section
        className="background-banner-container"
      >
        <div className="banner-img-container">
          <img
            src="/portfolio/images/esteban2.png"
            alt="esteban background banner"
          />
        </div>
        <div className="header-text-container">
          <div>
            <h1 className="myName">
              Esteban <br /> Mendez
            </h1>
            <p
              style={{
                fontSize: "25px",
                color: "white",
              }}
            >
              Web Designer
            </p>
            <hr />
            <LanguageIcon />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
