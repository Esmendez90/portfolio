import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <section>
        <div className="footer-container row-container row">
          <div className="row">
            <div className="col-xs-6 logo-container">
              <img
                className="logo"
                src={"/portfolio/images/logo.png"}
                alt="logo"
              />
            </div>
            <div className="col-xs-6">

              
              <h5>Created By:</h5>
              <p>Esteban Mendez</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
