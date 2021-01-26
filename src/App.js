import React, { Component } from "react";
import Logo from "./Logo";
import History from "./Lists/History";
import Skills from "./Lists/Skills";
import Education from "./Lists/EducationCerts";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
export default class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//cdn.youracclaim.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Justin Montgomery</h1>
          <Logo />
          <span>
            <a className="App-link" href="mailto:justin@montgomery.run">
              justin@montgomery.run
            </a>
          </span>
          <div>
            <span className="Icon">
              <a href="https://www.linkedin.com/in/justinmmontgomery/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="Icon">
              <a href="https://www.strava.com/athletes/18781585">
                <i className="fab fa-strava"></i>
              </a>
            </span>
          </div>
        </header>
        <br />
        <History />
        <br />
        <Skills />
        <br />
        <Education />
      </div>
    );
  }
}
