import React from "react";

function renderEducation() {
  return (
    <div className="resumeRow">
      <h2>Education</h2>
      <dl>
        <dt>BBA with focus in Management Information Systems and Finance</dt>
        <dd>
          Ohio University - <i>2007-2011 | Athens, OH</i>
        </dd>
      </dl>
    </div>
  );
}

function renderCerts() {
  return (
    <div className="resumeRow">
      <h2>Certifications</h2>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="eb715d79-8933-4a5c-bf3a-8b1d6dbb7f6e"
        data-share-badge-host="https://www.youracclaim.com"
      ></div>
    </div>
  );
}

function educationAndCerts() {
  return (
    <div>
      {renderEducation()}
      <br />
      {renderCerts()}
    </div>
  );
}

export default educationAndCerts;
