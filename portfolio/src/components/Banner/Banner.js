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
            src={"/images/pexels-aleksandar-pasaric-2341830.jpg"}
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
                fontWeight: "bold",
                textShadow: "2px 1px black",
              }}
            >
              Bilingual Digital Services: Web Design, Immigration Help, Translation & More
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
