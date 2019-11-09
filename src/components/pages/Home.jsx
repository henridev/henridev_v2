import React from "react";
import { useState, useEffect } from "react";
import Education from "../sub-components/Education";
import Experience from "../sub-components/Experience";
import Skills from "../sub-components/Skills";
import particlesOptions from "../../assets/particlesjs_portfolio.json";
import Particles from "react-particles-js";

export default function Home() {
  let cleanTyping = false;
  let count = 0;
  let currentTextIndex = 0;

  const [clickedSection, setClickedSection] = useState("education");
  const [line, setLine] = useState("");
  const [texts, setTexts] = useState([
    "Hello there henri here",
    "welcome to my site!"
  ]);
  useEffect(() => {
    let index = 0;
    typing(texts[currentTextIndex], index);
    return () => {
      cleanTyping = true;
    };
  }, []);
  function typing(text, index) {
    count++;
    if (cleanTyping) return;
    let letter = text.slice(0, index);
    index++;
    setLine(letter);
    if (text.length === index - 1) {
      let end = text.length;
      if (count > 30) return;
      setTimeout(() => {
        reverseTyping(end, text);
      }, 500);
      return;
    }
    setTimeout(() => {
      typing(text, index++);
    }, 150);
  }
  function reverseTyping(end, text) {
    let letter = text.slice(0, end);
    end--;
    setLine(letter);
    if (end < 0) {
      let index = 0;
      currentTextIndex++;
      if (currentTextIndex === texts.length) {
        currentTextIndex = 0;
      }
      typing(texts[currentTextIndex], index);
      return;
    }
    setTimeout(() => {
      reverseTyping(end, text);
    }, 100);
  }
  function handleClickedSection(e) {
    if (!e.target.id) return;
    const clickedSectionName = e.target.id;
    if (clickedSectionName == "education" && clickedSection != "education") {
      // setClickedUni('ironhack')
      const unis = document.querySelectorAll(".one_education");
      unis.forEach(uni => {
        uni.classList.remove("active_uni");
        if (uni.id == "ironhack") {
          uni.classList.add("active_uni");
        }
      });
    }
    setClickedSection(clickedSectionName);
  }

  return (
    <div className="home">
      <div className="welcome-msg grid-intro">
        <span className="lineOne">{line}</span>
      </div>
      <div className="short_description grid-description">
        Fullstack webdev {`&&`} <br />
        datawrangler
      </div>
      <ul className="learn_more grid-navigate" onClick={handleClickedSection}>
        <li className="learn_more_item" id="education">
          education
        </li>
        <li className="learn_more_item" id="skills">
          skills
        </li>
        <li className="learn_more_item" id="experience">
          experience
        </li>
        <li className="learn_more_item" id="descriptions">
          project-descriptions
        </li>
      </ul>
      <div className="links grid-links">
        <a
          href="https://github.com/belke05"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-github top_git" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/henri-de-bel/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-linkedin top_linkd" aria-hidden="true"></i>
        </a>
        <a
          href="https://medium.com/@belke05"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-medium top_linkd" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.codewars.com/users/belke05"
          target="_blank"
          rel="noopener noreferrer"
          rel="noopener noreferrer"
          className="codewars"
        >
          <img
            src="https://www.codewars.com/users/belke05/badges/large"
            alt="code_wars_badge_large"
            className="hide_large_badge"
          />
          <img
            src="https://www.codewars.com/users/belke05/badges/small"
            alt="code_wars_badge_small"
            className="hide_small_badge"
          />
        </a>
      </div>
      <div className="information grid-information">
        {clickedSection == "education" && (
          <Education className="information_section" />
        )}
        {clickedSection == "experience" && (
          <Experience className="information_section" />
        )}
        {clickedSection == "skills" && (
          <Skills className="information_section" />
        )}
      </div>
      <Particles className="particle_wrapper" params={particlesOptions} />
    </div>
  );
}
