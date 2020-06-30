import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import JobCards from './JobCards';

function Paycor() {
  return (
    <a href="https://www.paycor.com">Paycor</a>
  );
}

function Sundries() {
  return (
    <a href="http://www.sundriessolutions.com/">Sundries Solutions</a>
  );
}

function OU() {
  return (
    <a href="https://www.ohio.edu/">Ohio University</a>
  );
}

function EdMap() {
  return ("EdMap");
}

function SSDList() {
  return (
    <ul>
      <li>Worked with newly formed team in Kanban environment to rewrite legacy Powerbuilder/MSSQL application in .NET Core/AzureSQL.</li>
      <li>App managed financial transactions between Paycor, clients, employees, and various tax agencies.</li>
      <li>Main application utilized primarily Azure based assets. Including Functions, Storage, SQL.</li>
      <li>Extensive testing utilizing NUnit to ensure output of rewrite matched output of legacy app.</li>
      <li>Worked with stakeholders with continual feedback to gather requirements and ensure quality and features.</li>
      <li>UI in react with an API written in .NET Core hosted in Azure.</li>
      <li>Interfaced with other legacy systems to ensure hooks which legacy app calls were present in new application.</li>
    </ul>
  );
}

function SD2List() {
  return (
    <ul>
      <li>Worked on a variety of applications mainly centering around HR and Payroll.</li>
      <li>Worked with a number of WebAPI .NET Framework projects with MSSQL backends interfaced with EntityFramework, Stored Procedures, ADO.NET and others.</li>
      <li>Extensive work in MSSQL using stored procedures, triggers, user defined types, indexes, and other tools.</li>
      <li>Monitored performance using tools like NewRelic and logging (Stackify and server logs).</li>
      <li>Unit tested features using MSTest and NUnit.</li>
      <li>Supported user facing applications with bug fixes and feature work while working closely with involved stakeholders.</li>
      <li>Worked with team across multiple timezones and locations.</li>
      <li>Managed Scrum Master duties including, leading standup, retros, sprint planning, cross team dependencies, and other various responsibilities.</li>
    </ul>
  );
}

function SD1List() {
  return (
    <ul>
      <li>Primary work centered around HR application which integrated with separate Payroll solution.</li>
      <li>Answered support tickets and bug fixes around HR application and it's integration with Payroll solution.</li>
      <li>Worked closely with HR specialists to quickly resolve issues and questions as they arose in their work.</li>
      <li>Developed and deployed integration with third party Application Tracking System.</li>
      <li>Worked with team across multiple timezones and locations.</li>
    </ul>
  );
}

function QAAList() {
  return (
    <ul>
      <li>Continued QA work I had previously been doing with ED MAP.</li>
      <li>Worked closely with Ryan (Principal Consultant) for other miscellaneous tasks.</li>
    </ul>
  );
}

function TAList() {
  return (
    <ul>
      <li>Led evening help sessions to assist students through various levels of business programming.</li>
    </ul>
  );
}
function EdMapList() {
  return (
    <ul>
      <li>Helped expand the functionality of a CRM tool.</li>
      <li>Also assisted with QA work on their client service portal.</li>
    </ul>
  );
}
export default class App extends Component {
  renderHistoryList() {
    return <div class="cvRow">
      <h2>Experience</h2>
      <div class="history">
        <JobCards name="Senior Software Engineer" timeFrame="Sept 2018 - Present" company={Paycor()} list={SSDList()}></JobCards>
        <JobCards name="Software Developer II" timeFrame="Nov 2012 - Sept 2018" company={Paycor()} list={SD2List()}></JobCards>
        <JobCards name="Software Developer I" timeFrame="June 2011 - Nov 2012" company={Paycor()} list={SD1List()}></JobCards>
        <JobCards name="Quality Assurance Analyst" timeFrame="Apr 2011 - Jun 2011" company={Sundries()} list={QAAList()}></JobCards>
        <JobCards name="Teaching Assistant" timeFrame="Nov 2010 - Jun 2011" company={OU()} list={TAList()}></JobCards>
        <JobCards name="Intern" timeFrame="Nov 2010 - Jun 2011" company={(EdMap())} list={EdMapList()}></JobCards>
      </div>
    </div >;
  }

  renderSkillsList() {
    return <div class="cvRow">
      <h2>Skills and Proficiencies</h2>
      <div class="skillset">
        <h5>Technologies</h5>
        <li className="item">C#</li>
        <li className="item">.NET Framework</li>
        <li className="item">.NET Core</li>
        <li className="item">MSSQL</li>
        <li className="item">MVC</li>
        <li className="item">WebAPI</li>
        <li className="item">Restful Services</li>
        <li className="item">Entity Framework</li>
        <li className="item">Azure SQL</li>
        <li className="item">Azure Storage</li>
        <li className="item">Azure Functions</li>
        <li className="item">React</li>
        <h5>Tools</h5>
        <li className="item">Visual Studio</li>
        <li className="item">Visual Studio Code</li>
        <li className="item">Git</li>
        <li className="item">TFS</li>
        <li className="item">TFS Source Control</li>
        <li className="item">Rider</li>
        <li className="item">TeamCity</li>
        <li className="item">Octopus Deploy</li>
        <h5>Methodologies</h5>
        <li className="item">Scrum</li>
        <li className="item">Kanban</li>
        <li className="item">Waterfall</li>
      </div>
    </div>
  }

  renderEducation() {
    return <div class="cvRow">
      <h2>Education</h2>
      <dl>
        <dt>BBA with focus in Management Information Systems and Finance</dt>
        <dd>Ohio University - <i>2007-2011 | Athens, OH</i></dd>
      </dl>
    </div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Justin Montgomery</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <span>
            <a class="App-link" href="mailto:justin@montgomery.run">justin@montgomery.run</a>
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
          <br />
          {this.renderEducation()}
        </body >
      </div >
    );
  }
}