import React from "react";
import LanguageIcon from "./LanguageIcon";
import "./style.css";

function Banner() {
  return (
    <>
      <section
        className="background-banner-container"
      >
        <img
          src="/portfolio/images/estebanpic.png"
          alt="esteban background banner"
          style={{ width: "100%", minHeight: "calc(100vh)" }}
        />

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
              Web designer
            </p>
            <LanguageIcon/>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Banner;
