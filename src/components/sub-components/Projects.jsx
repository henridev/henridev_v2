import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Button } from "react-bootstrap";
import projectInfo from "../../assets/projectInfo.js";

export default function Projects() {
  const [toggles, setToggles] = useState({
    toggle1: false,
    icon: "maptee"
  });
  const card_ref = useRef();
  // instead of directly applying css props
  // we can apply a function to them so their
  // value depends on another value = interpolation
  function inverseOpacity(o) {
    return 1 - o;
  }
  function inverseTransform(t) {
    // rotate an extra 180 degrees to make it the opposite of
    // other parts of the card
    return `${t} rotateY(180deg)`;
  }

  const { opacity, transform } = useSpring({
    opacity: toggles.toggle1 ? 1 : 0,
    //opacity value will be 1 if turned on 0 otherwise
    transform: `rotateY(${toggles.toggle1 ? 180 : 0}deg) perspective(${365}px)`
  });

  const AnimatedCard = animated(Card);
  return (
    <div className="card-flip-wrapper">
      <button
        onClick={() => {
          console.log(card_ref.current.clientWidth);

          setToggles({ ...toggles, toggle1: !toggles.toggle1 });
        }}
      ></button>

      <AnimatedCard
        ref={card_ref}
        style={{
          opacity: opacity.interpolate(o => inverseOpacity(o)),
          // the interpolate will pass the opasity value to the inverseopacity function
          transform: transform,
          config: { mass: 5, tension: 500, friction: 80 }
        }}
        className="skill_item project-front"
      >
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>
            Click on the project you want to know more about
          </Card.Title>
          <Button
            variant="secondary"
            style={{
              backgroundImage: `url(${projectInfo.maptee.icon})`
            }}
            className="project-flip"
          ></Button>
          <Button
            variant="secondary"
            style={{
              backgroundImage: `url(${projectInfo.jab.icon})`
            }}
            className="project-flip"
          ></Button>
          <Button
            variant="secondary"
            style={{
              backgroundImage: `url(${projectInfo.war_stars.icon})`
            }}
            className="project_flip"
          ></Button>
        </Card.Body>
      </AnimatedCard>
      <AnimatedCard
        style={{
          opacity: opacity,
          transform: transform.interpolate(t => inverseTransform(t)),
          backgroundColor: "#3a3b3d"
        }}
        className="skill_item project-back"
      >
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>DataScience</Card.Title>
          <Card.Text>ffffffffffffffff</Card.Text>
          <Button variant="secondary">
            <span role="img" aria-label="datascience-icons">
              &#x1F9EE; &#x1F40D;
            </span>
          </Button>
        </Card.Body>
      </AnimatedCard>
    </div>
  );
}
