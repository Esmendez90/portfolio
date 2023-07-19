import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import Projects from "./Projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Works() {
  return (
    <>
      <section>
        <div id="works" className="experience-container row-container row">
          <div className="h2-container col-sm-3">
            <div>
              <h2 style={{ color: "#4a4a4a" }}>
                Some sites
                <br />
                I've built.
              </h2>
            </div>
          </div>
          <div className="col-sm-8">
            <div>
              {Projects.map(
                ({ id, image, alt, title, text, siteLink, repoLink }) => (
                  <div key={id} className="project-card">
                    <div style={{ position: "relative" }}>
                      <img
                        src={process.env.PUBLIC_URL + [image]}
                        alt={alt}
                        className="d-block w-100"
                        style={{ height: "auto" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "80%",
                          backgroundColor: "rgba(0, 0, 0, 0.9)",
                          width: "100%",
                          height: "20%",
                        }}
                      >
                        <Card.Body
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            height: "25%",
                          }}
                        >
                          <div className="btn-container">
                            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                              <li className="links-container icon">
                                <a
                                  href={repoLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                              </li>
                              <li className="links-container icon">
                                <a
                                  href={siteLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5
                            style={{
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            {title}
                          </h5>
                        </Card.Body>
                      </div>
                    </div>

                    <Card.Body style={{ backgroundColor: "#ededed4d" }}>
                      <p style={{ color: "#5c5c5c", marginTop: "1rem" }}>
                        {text}
                      </p>
                    </Card.Body>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
