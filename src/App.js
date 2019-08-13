import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

export default class App extends Component {
  renderHistoryList() {


    return <div class="cvRow">
      <h2>Experience</h2>
      <div class="history">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Senior Software Developer
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Title>
                  <a href="https://www.paycor.com">Paycor</a>
                </Card.Title>
                <Card.Subtitle>Sept 2018 - Present</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Worked with new team to rewrite legacy Powerbuilder/MSSQL application in .NET Core/AzureSQL.</li>
                    <li>Main application utilized primarily Azure based assets. Including Functions, Storage, SQL.</li>
                    <li>Extensive testing utilizing NUnit to ensure output of rewrite matched output of legacy app.</li>
                    <li>Worked with stakeholders with continual feedback to gather requirements and ensure quality and features.</li>
                    <li>UI in react with an API written in .NET Core hosted in Azure.</li>
                    <li>Interfaced with other legacy systems to ensure hooks which legacy app calls were present in new application.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Software Developer II
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>
                  <a href="https://www.paycor.com">Paycor</a>
                </Card.Title>
                <Card.Subtitle>Nov 2012 - Sept 2018</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Worked on a variety of applications mainly centering around HR and Payroll.</li>
                    <li>Worked with a number of WebAPI .NET Framework projects with MSSQL backends interfaced with EntityFramework, Stored Procedures, ADO.NET and others.</li>
                    <li>Extensive work in MSSQL using stored procedures, triggers, user defined types, indexes, and other tools.</li>
                    <li>Monitored performance using tools like NewRelic and logging (Stackify and server logs).</li>
                    <li>Unit tested features using MSTest and NUnit.</li>
                    <li>Supported user facing applications with bug fixes and feature work while working closely with involved stakeholders.</li>
                    <li>Worked with team across multiple timezones and locations.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Software Developer I
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>
                  <a href="https://www.paycor.com">Paycor</a>
                </Card.Title>
                <Card.Subtitle>June 2011 - Nov 2012</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Primary work centered around HR application which integrated with separate Payroll solution.</li>
                    <li>Answered support tickets and bug fixes around HR application and it's integration with Payroll solution.</li>
                    <li>Worked closely with HR specialists to quickly resolve issues and questions as they arose in their work.</li>
                    <li>Developed and deployed integration with third party Application Tracking System.</li>
                    <li>Worked with team across multiple timezones and locations.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Quality Assurance Analyst
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>
                  <a href="http://www.sundriessolutions.com/">Sundries Solutions</a>
                </Card.Title>
                <Card.Subtitle>Apr 2011 - Jun 2011</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Continued QA work I had previously been doing with ED MAP.</li>
                    <li>Worked closely with Ryan (Principal Consultant) for other miscellaneous tasks.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Teaching Assistant
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Card.Title>
                  <a href="https://www.ohio.edu/">Ohio University</a>
                </Card.Title>
                <Card.Subtitle>Nov 2010 - Jun 2011</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Led evening help sessions to assist students through various levels of business programming.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Intern
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <Card.Title>
                  ED MAP
              </Card.Title>
                <Card.Subtitle>Nov 2010 - Jun 2011</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Helped expand the functionality of a CRM tool.</li>
                    <li>Also assisted with QA work on their client service portal.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>;
  }

  renderSkillsList() {
    return <div class="cvRow">
      <h2>Skills and Proficiencies</h2>
      <ul class="skillset">
        <li className="item">C#</li>
        <li className="item">MSSQL</li>
        <li className="item">.NET Framework</li>
        <li className="item">.NET Core</li>
        <li className="item">WebAPI</li>
        <li className="item">Restful Services</li>
        <li className="item">Entity Framework</li>
        <li className="item">Azure Platform</li>
        <li className="item">Azure Functions</li>
        <li className="item">React</li>
        <li className="item">Scrum</li>
      </ul>
    </div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Justin Montgomery</h1>
          <span>
            <a class="App-link" href="mailto:justin.montgomery2@gmail.com">justin.montgomery2@gmail.com</a>
          </span>
          <div>
            <span class="Icon">
              <a href="https://www.linkedin.com/in/justinmmontgomery/"><i class="fab fa-linkedin-in"></i></a>
            </span>
            <span class="Icon">
              <a href="https://www.strava.com/athletes/18781585"><i class="fab fa-strava"></i></a>
            </span>
          </div>
        </header >
        <body>
          <br />
          {this.renderHistoryList()}
          <br />
          {this.renderSkillsList()}
        </body >
      </div >
    );
  }
}

