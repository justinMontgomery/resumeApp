import React, { useState } from "react";
import logo from "./logo.jpg";
import { Async } from 'react-async';

function CAAS(props) {

  const [click, setClicked] = useState(false);
  const loadUsers = () =>
    fetch("https://cataas.com/cat?json=true")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  if (click) {
    return (
      <div>
        <Async promiseFn={loadUsers}>
          <Async.Loading><img src={logo} className="App-logo" alt="logo" /></Async.Loading>
          <Async.Fulfilled>
            {data => {
              let url = `https://cataas.com/${data.url}`;
              return (
                <div>
                  <div onClick={() => setClicked(!click)}> <img src={url} className="App-logo" alt="catLogo" /></div>
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            {error => `Something went wrong: ${error.message}`}
          </Async.Rejected>
        </Async>
      </div>
    );
  }
  else {
    return <div onClick={() => { setClicked(!click) }}> <img src={logo} className="App-logo" alt="logo" /></div>
  }
}

export default CAAS;