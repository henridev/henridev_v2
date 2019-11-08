import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/pages/Contact";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  handleEmail = api => e => {
    e.preventDefault();
    fetch("/.netlify/functions/" + api)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <button onClick={this.handleEmail("sendmail")}>
          {loading ? "Loading..." : "Call sendmail"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </header>
      <Contact />
    </div>
  );
}
