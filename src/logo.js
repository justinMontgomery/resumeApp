import React, { useState } from "react";
import logo from "./logo.jpg";
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";



function CAAS(props) {

  async function fetchCat() {
    setLoading(false);
    const response = await fetch('https://cataas.com/cat?json=true');
    const catImg = await response.json();
    console.log(catImg);
    return catImg;
  }


  const [click, setClicked] = useState(false);
  const [cat, setCat] = useState([]);
  const [isLoading, setLoading] = useState(true);


  if (click) {
    if (isLoading) {
      fetchCat().then(x => {
        setCat(x);
      });
      return <img src={logo} className="App-logo" alt="logo" />
    }
    else {
      let url = `https://cataas.com/${cat.url}`;
      return <div onClick={() => setClicked(!click)}> <img src={url} className="App-logo" alt="" /></div>
    }


  }
  else
    return <div onClick={() => { setClicked(!click); setLoading(true); }}> <img src={logo} className="App-logo" alt="logo" /></div>


}



export default CAAS;
