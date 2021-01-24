import React, { useState } from "react";
import logo from "./logo.jpg";

function CAAS(props) {

 
  const [open, setOpen]= useState(false);

  if (open){
      return <div  onClick={()=>setOpen(!open)}> <img src={logo} className="App-logo" alt="lalalala" /></div>
  }
  return <div  onClick={()=>setOpen(!open)}> <img src={logo} className="App-logo" alt="logo" /></div>

}



export default CAAS;
