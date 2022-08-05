import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <section>
        <div className="footer-container row-container row">
          <div className="row">
             {/* <div className="col-xs-6"> */}
                <div className="col-xs-6">
              <img
                className="sheepwolf-logo"
                src="/portfolio/images/sheepwolf.png"
                alt="sheepwolf logo"
              />
              </div>
            {/* </div> */}
            <div className="col-xs-6 text-right sm-text-left"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
