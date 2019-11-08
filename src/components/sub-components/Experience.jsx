import React from 'react'
import tvh_logo from '../../assets/images/tvh_logo.png'

export default function Experience() {
  return (
    <div className="jumbotron text-light bg-transparent">
      <h1 className="display-4 experience-title">
        TVH parts co{' '}
        <img src={tvh_logo} alt="tvh logo" className="experience_logo" />
      </h1>
      <p className="lead experience-short">
        TVH is a belgian multinational and market leader selling parts and
        accesories for material handeling, industrial and agricultural
        equipment.
      </p>
      <hr className="my-4" />
      <p className="experience-paragraph">
        <span className="inYellow">Mission:</span> Map the critical business
        processes in BPMN with a main focus on the logistical aspect. This was
        with the goal of setting up automated software testing, once the
        critical scenarios where identified test scripts could be written to
        mimic these scenarious. Every time software changes were made these
        scenarios would then be tested to see if the new code had any issues
        with performing those scenarios.
      </p>
      <a
        className="btn btn-warning btn-lg"
        href="https://www.tvh.com/en-us/about-tvh"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        Learn more
      </a>
    </div>
  )
}
