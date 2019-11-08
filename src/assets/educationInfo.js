import javascript from './images/info_logos/javascript.png'
import nodejs from './images/info_logos/nodejs.png'
import express from './images/info_logos/express.png'
import mongoose from './images/info_logos/mongodb.png'
import react from './images/info_logos/react.png'
import sql from './images/info_logos/azure.png'
import googleanalytics from './images/info_logos/ganalytics.png'
import python from './images/info_logos/python.png'

const educationInformation = {
  ghent1: {
    text:
      'During my first years at the University of Ghent I obtained a Bachelors degree in business administration. A wide variety of topics were covered here ranging from economics and mathematics to management and entrepreneurship. I was most interested however in the more technical courses which is why I pivoted towards IT after this degree.',
  },
  baruch: {
    text:
      'Thanks to the grades I received in my Bachelor in business administration i got the opportunity to spend an exchange semester abroad in New York at the Zicklin School Of Business. I thought me a great deal about interacting with different cultures from all around the world as well as show me how business is conducted on the American market. This experience also thought that I enjoy a global minded setting, meaning that a company with global aspirations and or operations would be a good fit.',
  },
  ghent2: {
    text:
      'The second part of my education at the university of ghent was a Masters in Management and IT. Here the focus was mainly on learning on how to manage an IT project (covering topics such as Agile, BPMN and functional analysis...) with next to that also some courses on technical skills like SQL and programming basics. The second semester was followed up with an intership, I had an intership at TVH Co parts. in Kansas City. To find out more click on',
  },
  ironhack: {
    text:
      ' At Ironhack I followed a 9 week intensive webdevelopment bootcamp. The bootcamp is split up in 3 modules. The first module focused on HTML, CSS and JS afterward we focused on express, node and mongoose and handlebars as a view engine. In the last module we learned react and in the end we developed a fullstack application build on a MERN stack. After each module there was a project to complete, to learn more about those please jump to',
    technologies: [
      { name: 'javascript', file: javascript },
      { name: 'mongoose', file: mongoose },
      { name: 'express', file: express },
      { name: 'react', file: react },
      { name: 'node.js', file: nodejs },
    ],
  },
  jedha: {
    text:
      'As a follow up to my training in webdevelopment at ironhack. At jedha. I sharpened my knowledge on python and learned to apply machine learning algorithms in applications.',
    technologies: [
      { name: 'python', file: python },
      { name: 'SQL', file: sql },
      { name: 'google analytics', file: googleanalytics },
    ],
  },
}

export default educationInformation
