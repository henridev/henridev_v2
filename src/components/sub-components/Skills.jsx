import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Skills({ children }) {
  return (
    <div className="skills_grid">
      <Card style={{ width: "18rem" }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>DataScience</Card.Title>
          <Card.Text>
            Focus on combining the power of Python and python packages such as
            Matplotlib, numpy and pandas to crack datascience cases.
          </Card.Text>
          <Button variant="secondary">
            <span role="img" aria-label="datascience-icons">
              &#x1F9EE; &#x1F40D;
            </span>
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>Web-Development</Card.Title>
          <Card.Text>
            Currently focused on the MERN stack, while in the meantime exploring
            new technologies like Graphql, Vue.js and firebase.
          </Card.Text>
          <Button variant="secondary">
            <span role="img" aria-label="web-dev-icons">
              &#x1F468;&#x200D;&#x1F4BB; &#x1F30D;
            </span>
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>Business Analysis</Card.Title>
          <Card.Text>
            Thanks to my economic background I also know a thing or two about
            what a business actualy wants. Programming is more than just writing
            some code it is translating business needs into working and
            maintainable solutions.
          </Card.Text>
          <Button variant="secondary">
            <span role="img" aria-label="ba-icons">
              &#x1F9EE; &#x1F40D;&#x1F91D; &#x1F4C8;
            </span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
