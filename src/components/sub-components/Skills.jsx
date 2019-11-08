import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Skills({ children }) {
  return (
    <div className="skills_grid">
      <Card style={{ width: '18rem' }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>DataScience</Card.Title>
          <Card.Text>
            As a primary language i'm using Python. The primary packages i use
            in combination with python are Pandas, Numpy and MatplotLib.
          </Card.Text>
          <Button variant="secondary">&#x1F9EE; &#x1F40D;</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>Web-Development</Card.Title>
          <Card.Text>
            Proficient in JavaScript using the following packages mainly:
            express, mongoose. As a front-end framework I prefer using react but
            I'm currently delving into Vue.js too. Used to the rest api but also
            familiar with Graphql.
          </Card.Text>
          <Button variant="secondary">
            &#x1F468;&#x200D;&#x1F4BB; &#x1F30D;
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="skill_item">
        <Card.Img src={null} />
        <Card.Body>
          <Card.Title>Business Analysis</Card.Title>
          <Card.Text>
            Thanks to my economic background I also know a thing or two about
            what a business actualy wants. Programming is more than just writing
            some code it is translating business needs into working and
            maintainable solutions.
          </Card.Text>
          <Button variant="secondary">&#x1F91D; &#x1F4C8;</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
