import logo from './assets/logo.jpg'
import { useState } from "react";
import { Async } from "react-async";

export function Logo() {

  const [click, setClicked] = useState(false);
  const loadCatPic = () =>
    fetch("https://cataas.com/cat?json=true")
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());

  if (click) {
    return (
      <div>
        <Async promiseFn={loadCatPic}>
          <Async.Loading>
            <img src={logo} className="App-logo" alt="logo" />
          </Async.Loading>
          <Async.Fulfilled>
            {(data: CatResponse) => {
              const url = `https://cataas.com/cat/${data._id}`;
              return (
                <div>
                  <div onClick={() => setClicked(!click)}>
                    {" "}
                    <img src={url} className="App-logo" alt="catLogo" />
                  </div>
                </div>
              );
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            <img src={logo} className="App-logo" alt="logo" />
          </Async.Rejected>
        </Async>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setClicked(!click);
        }}
      >
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

interface CatResponse {
  _id: string;
}