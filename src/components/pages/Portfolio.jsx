import React from "react";
import { useState } from "react";
import Particles from "react-particles-js";

import particlesOptions from "../../assets/particlesjs_portfolio.json";
import projectInfo from "../../assets/projectInfo.js";

export default function Portfolio() {
  const projectsNames = ["maptee", "jab", "war_stars"];
  const [webPortfolio, setWebPortfolio] = useState(true);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  function handleCheck(e) {
    console.log(e.target);
    setWebPortfolio(!webPortfolio);
  }

  function handleProjectChange(e) {
    if (!e.target.className) return;
    const arrow = e.target.className;
    if (arrow === "arrowback" && selectedProjectIndex === 0) {
      return setSelectedProjectIndex(2);
    }
    if (arrow === "arrowforward" && selectedProjectIndex === 2) {
      return setSelectedProjectIndex(0);
    }
    if (arrow === "arrowback" && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    } else if (arrow === "arrowforward" && selectedProjectIndex < 2) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  }

  return (
    <div className="portfolio-wrapper">
      <Particles className="particle_wrapper2" params={particlesOptions} />
      <div className="portfolio_grid_wrapper">
        {/* <div className="toggle grid_item">
          <input
            className="checkbox"
            type="checkbox"
            name="checkbox"
            value={webPortfolio}
            onClick={handleCheck}
          />
          <label htmlFor="checkbox">toggle to see datascience projects</label>
        </div> */}
        {webPortfolio && (
          <div className="web-wrapper grid_item web_wrapper_grid">
            <div className="grid_project project_logo">
              <div
                className="project_img_wrapper"
                style={{
                  backgroundImage: `url(${projectInfo[projectsNames[selectedProjectIndex]].icon})`
                }}
              >
                <a
                  href={projectInfo[projectsNames[selectedProjectIndex]].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img
                    src={projectInfo[projectsNames[selectedProjectIndex]].icon}
                    className="project_logo_img"
                  /> */}
                </a>
              </div>
            </div>
            <div className="arrowback" onClick={handleProjectChange}></div>
            <div className="grid_project project_screens">
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mockupscreen"
                  src={projectInfo[projectsNames[selectedProjectIndex]].mockup}
                  alt="mockup-screen"
                />
              </a>
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                live site
              </a>
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].gitcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                git repo
              </a>
              {/* {projectInfo[selectedProject].infoElement} */}
            </div>
            <div className="arrowforward" onClick={handleProjectChange}></div>
          </div>
        )}
        {!webPortfolio && <div className="data-wrapper"></div>}
      </div>
    </div>
  );
}
