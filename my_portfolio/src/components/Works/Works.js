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
        <div className="experience-container row-container row">
          <div className="h2-container col-sm-3">
            <div>
              <h2>
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
                  <Card key={id}>
                    <img src={process.env.PUBLIC_URL + [image]} alt={alt} />

                    <Card.Body>
                      <h5>{title}</h5>
                      <p>{text}</p>

                      <div className="btn-container">
                        <ul>
                          <li className="links-container icon">
                            <a href={repoLink} target="_blank" rel="noreferrer">
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                          </li>
                          <li className="links-container icon">
                            <a href={siteLink} target="_blank" rel="noreferrer">
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
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
