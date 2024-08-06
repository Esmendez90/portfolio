import React from "react";
import "./style.css";

function ProgressBar() {
  return (
    <>
      <div className="progressBar-container">
        <div className="progress-box">
          <p>HTML5 <span>90%</span></p>
          <div className="progress">
            <div className="html progress-color"></div>
          </div>
        </div>

        <div className="progress-box">
          <p>CSS3 <span>90%</span></p>
          <div className="progress">
            <div className="css progress-color"></div>
          </div>
        </div>

        <div className="progress-box">
          <p>Javascript <span>60%</span></p>
          <div className="progress">
            <div className="js progress-color"></div>
          </div>
        </div>

        <div className="progress-box">
          <p>React <span>30%</span></p>
          <div className="progress">
            <div className="react progress-color"></div>
          </div>
        </div>

        <div className="progress-box">
          <p>Photoshop <span>30%</span></p>
          <div className="progress">
            <div className="photoshop progress-color"></div>
          </div>
        </div>

        {/* <div className="progress-box">
          <p>WordPress <span>45%</span></p>
          <div className="progress">
            <div className="wp progress-color"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProgressBar;
