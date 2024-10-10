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
            src={"/portfolio/images/pexels-aleksandar-pasaric-2341830.jpg"}
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
              Web Developer
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
