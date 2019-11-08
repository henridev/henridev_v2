import React, { useState, useEffect } from 'react'

export default function Scrollbar() {
  useEffect(() => {
    window.onscroll = handleScroll
    const icons = document.querySelectorAll('i.fas')
    icons[0].classList.add('activegold')
  }, [])

  function handleScroll(e) {
    const portfolio = document.querySelector('.portfolio-wrapper')
    const contact = document.querySelector('.contact_page')
    const scrollbar = document.querySelector('.scrollbar_line')
    const icons = document.querySelectorAll('i.fas')
    const top_portfolio = portfolio.offsetTop
    const top_contact = contact.offsetTop
    if (window.scrollY > (top_portfolio + top_contact) / 2) {
      icons[2].classList.add('activegold')
      icons[0].classList.remove('activegold')
      icons[1].classList.remove('activegold')
    } else if (window.scrollY > top_portfolio / 2) {
      icons[1].classList.add('activegold')
      icons[2].classList.remove('activegold')
      icons[0].classList.remove('activegold')
    } else if (window.scrollY < top_portfolio / 2) {
      icons[0].classList.add('activegold')
      icons[2].classList.remove('activegold')
      icons[1].classList.remove('activegold')
    }
  }

  function handleClick(e) {
    const page_clicked_on = e.currentTarget.classList[0]
    const home = document.querySelector('.home')
    const portfolio = document.querySelector('.portfolio-wrapper')
    const contact = document.querySelector('.contact_page')
    const top_home = home.offsetTop
    const top_portfolio = portfolio.offsetTop
    const top_contact = contact.offsetTop
    if (page_clicked_on == 'home_page')
      return window.scrollTo({ top: top_home, behavior: 'smooth' })
    if (page_clicked_on == 'portfolio_page')
      return window.scrollTo({ top: top_portfolio, behavior: 'smooth' })
    if (page_clicked_on == 'contacts_page')
      return window.scrollTo({ top: top_contact, behavior: 'smooth' })
  }

  return (
    <div className="scrollbar">
      <span className="scrollbar_line"></span>
      <span className="home_page circle" onClick={handleClick}>
        <i className="home_page fas fa-home"></i>
      </span>
      <span className="portfolio_page circle" onClick={handleClick}>
        <i
          className="portfolio_page fas fa-project-diagram"
          style={{ backgroundColor: '$yellow' }}
        ></i>
      </span>
      <span className="contacts_page circle" onClick={handleClick}>
        <i className="contacts_page fas fa-address-card"></i>
      </span>
    </div>
  )
}
