import React, { useState } from "react";
import ghent from "../../assets/images/info_logos/ghent2.png";
import baruch from "../../assets/images/info_logos/baruch2.png";
import iron from "../../assets/images/info_logos/iron2.png";
import jedha from "../../assets/images/info_logos/jedha.png";
import educationInfo from "../../assets/educationInfo";

export default function Education() {
  const [clickedUni, setClickedUni] = useState("ironhack");
  function changeInfoDisplay(e) {
    if (!e.target.id) return;
    const clickedUni = e.target.id;
    const unis = document.querySelectorAll(".one_education");
    unis.forEach(uni => {
      uni.classList.remove("active_uni");
      if (uni.id === clickedUni) {
        uni.classList.add("active_uni");
      }
    });

    setClickedUni(clickedUni);
  }

  return (
    <span>
      <div className="timeline">
        <div className="years">
          <span className="one_year">2015-2018</span>
          <span className="one_year">2018-2019</span>
          <span className="one_year">2019 +400hours</span>
          <span className="one_year">2019 +400hours</span>
        </div>
        <div className="logos" onClick={changeInfoDisplay}>
          <img
            src={ghent}
            alt="ghent uni"
            className="one_education"
            id="ghent1"
          />
          <img
            src={baruch}
            alt="baruch college"
            className="one_education baruch"
            id="baruch"
          />
          <img
            src={ghent}
            alt="ghent uni"
            className="one_education"
            id="ghent2"
          />
          <img
            src={iron}
            alt="ironhack"
            className="one_education ironhack active_uni"
            id="ironhack"
          />
          <img src={jedha} alt="jedha" className="one_education" id="jedha" />
        </div>
      </div>
      <div className="specifics">
        <p className="specifics_text">{educationInfo[clickedUni].text}</p>
        {educationInfo[clickedUni].technologies && (
          <span className="technologies_span">
            <h2>Technologies implemented</h2>
            <div className="technology_wrapper">
              {educationInfo[clickedUni].technologies.map((technology, i) => {
                if (clickedUni === "jedha") {
                  return (
                    <img
                      key={i}
                      className="technology_image"
                      src={technology.file}
                      style={{ width: "15%", height: "15%" }}
                    ></img>
                  );
                }
                return (
                  <img className="technology_image" src={technology.file}></img>
                );
              })}
            </div>
          </span>
        )}
      </div>
    </span>
  );
}
