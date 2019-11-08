import React, { useState } from "react";
import Particles from "react-particles-js";
// import api from "../../api";
import particlesOptions from "../../assets/particlesjs_portfolio.json";

export default function Contact() {
  const [mailInfo, setmailInfo] = useState({
    sender_mail: "",
    name: "",
    content: "",
    subject: ""
  });
    e.preventDefault();
    fetch("/.netlify/functions/sendmail", {
      method: "POST",
      body: mailInfo
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  function handleMailChange(e) {
    console.log("here");
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
    setmailInfo({ ...mailInfo, [name]: value });
  }

  // function hanldeMailDelivery(e) {
  //   e.preventDefault();
  //   api
  //     .sendmail(mailInfo)
  //     .then(res => {
  //       console.log("succesful in sending mail", res);
  //     })
  //     .catch(err => {
  //       console.log("something went wrong sending the email", err);
  //     });
  // }

  return (
    <div className="contact_page">
      <section id="contact">
        <h1 class="section-header">CONTACT</h1>
        <div class="contact-wrapper">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name"
                  name="name"
                  value={mailInfo.name}
                  onChange={handleMailChange}
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  name="sender_mail"
                  value={mailInfo.sender_mail}
                  onChange={handleMailChange}
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="your message to me"
              name="content"
              value={mailInfo.content}
              onChange={handleMailChange}
            ></textarea>
            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
              // onClick={hanldeMailDelivery}
              style={{ backgroundColor: "#fac508", borderColor: "#fac508" }}
            >
              <div class="button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Paris | FRA</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      +32 471 93 08 14
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      henri.dbel@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a
                  href="https://github.com/belke05"
                  target="_blank"
                  class="contact-icon"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/henri-de-bel/"
                  target="_blank"
                  className="contact-icon"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; made with &#x1F49B; by Henri</div>
          </div>
        </div>
      </section>
      <Particles className="particle_wrapper_last" params={particlesOptions} />
    </div>
  );
}
