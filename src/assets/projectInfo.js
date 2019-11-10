import React from "react"
import maptee_logo from "./images/maptee_logo.png"
import jab_logo from "./images/jab_logo.png"
import war_stars_logo from "./images/war_stars_logo.png"
import jab_mockup from "./images/jab_mockup.png"
import maptee_mockup from "./images/maptee_mockup.png"
import war_stars_mockup from "./images/warstars_mockup.png"

const projectInfo = {
  maptee: {
    icon: maptee_logo,
    mockup: maptee_mockup,
    url: "http://maptee.herokuapp.com/",
    gitcode: "https://github.com/SandwichExpert/Final-Project",
    infoElement: (
      <div>
        <b>
          <p className="project_description">
            Maptee was our final project at ironhack. It is a fullstack app
            based on the
            <span className="highlight_technology"> MERN framework</span>. In
            this app we made use of the
            <span className="highlight_technology"> Google maps API</span> and
            <span className="highlight_technology"> websockets</span> to create
            a live updating interactive map. On Maptee a user can sign up and
            create meetup events. To these events he can invite friends. After
            this is done friends can go to the meetup map and indicate where
            they would like the meetup to happen and from where they will be
            leaving. They can also discus on the live chat on which location
            they preffer. After that people can vote on their favourite location
            to meetup. This should help friends find a compromise when they want
            to spend a friday night out but not travel for an hour to get there.
          </p>
        </b>
      </div>
    )
  },
  jab: {
    icon: jab_logo,
    mockup: jab_mockup,
    url: "http://jabironhack.herokuapp.com/",
    gitcode: "https://github.com/belke05/jab",
    infoElement: (
      <div>
        <b>
          <p className="project_description">
            Jab was the second Ironhack project it is made with
            <span className="highlight_technology">
              {" "}
              express, handlebars, mongoose, youtube and news api's{" "}
            </span>
            Jab is a platform for fighting sports enthousiasts. You can make an
            account and indicate your favourite fighter and fighting sports.
            Based on your preferences you can filter the latest news and video
            articles that get updated via the news and youtube api's. Next to
            this a social element was also added where you can comment and like
            on the articles aswell.
          </p>
        </b>
      </div>
    )
  },
  war_stars: {
    icon: war_stars_logo,
    mockup: war_stars_mockup,
    url: "https://belke05.github.io/",
    gitcode: "https://github.com/belke05/war_stars",
    infoElement: (
      <div>
        <b>
          <p className="project_description">
            War Stars was the first IronHack project it is a game based on
            <span className="highlight_technology">
              {" "}
              javascript and canvas{" "}
            </span>
            War Stars is a game based on the starwars universe. As Luke
            Skywalker you have to escape a planet within a certain timelimit.
            After that escape a destroyer firing at you to re-ignite the rebel
            ressistance and beat the empire.
          </p>
        </b>
      </div>
    )
  }
}

export default projectInfo
