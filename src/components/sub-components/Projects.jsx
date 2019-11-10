import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Card, Button } from "react-bootstrap"
import projectInfo from "../../assets/projectInfo.js"
const AnimatedCard = animated(Card)

export default function Projects() {
  const [toggles, setToggles] = useState({
    toggle1: false,
    icon: "maptee"
  })
  // instead of directly applying css props
  // we can apply a function to them so their
  // value depends on another value = interpolation

  const { opacity, transform, zIndex } = useSpring({
    opacity: toggles.toggle1 ? 1 : 0,
    //opacity value will be 1 if turned on 0 otherwise
    transform: `rotateY(${toggles.toggle1 ? 180 : 0}deg) perspective(365px)`,
    zIndex: toggles.toggle1 ? -1 : 1,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  function flipcard(e) {
    const project = e.target.dataset.project
    if (project) {
      setToggles({ toggle1: !toggles.toggle1, icon: project })
    } else {
      setToggles({ ...toggles, toggle1: !toggles.toggle1 })
    }
  }

  return (
    <div className="card-flip-wrapper">
      <AnimatedCard
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          // the interpolate will pass the opasity value to the inverseopacity function
          transform: transform,
          zIndex: zIndex
        }}
        className="skill_item project-front"
      >
        <Card.Body>
          <Card.Title className="card-info">
            Click on the project you want to know more about
          </Card.Title>
          <div className="project-buttons">
            <Button
              data-project="maptee"
              style={{
                backgroundImage: `url(${projectInfo.maptee.icon})`
              }}
              className="project-flip"
              onClick={flipcard}
            ></Button>
            <Button
              data-project="jab"
              style={{
                backgroundImage: `url(${projectInfo.jab.icon})`
              }}
              className="project-flip"
              onClick={flipcard}
            ></Button>
            <Button
              data-project="war_stars"
              style={{
                backgroundImage: `url(${projectInfo.war_stars.icon})`
              }}
              className="project-flip"
              onClick={flipcard}
            ></Button>
          </div>
        </Card.Body>
      </AnimatedCard>
      <AnimatedCard
        style={{
          opacity: opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
          backgroundColor: "#3a3b3d",
          zIndex: zIndex.interpolate(z => -1 * z)
        }}
        className="skill_item project-back"
      >
        <Card.Img src={null} />
        <Card.Body className="project-flip-back">
          <Card.Text>{projectInfo[toggles.icon].infoElement}</Card.Text>
          <Button
            variant="secondary"
            onClick={e => {
              setToggles({ ...toggles, toggle1: !toggles.toggle1 })
            }}
          >
            <span role="img" aria-label="return icon" className="return_icon">
              &#x21A9;
            </span>
          </Button>
        </Card.Body>
      </AnimatedCard>
    </div>
  )
}
