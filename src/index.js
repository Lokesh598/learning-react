import React from 'react';
import ReactDom from 'react-dom'
let fName = "Lokesh";
let lName = "singh";
// new Date().getFullYear()
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
// let year = 2019;
ReactDom.render(
  <div>
    <p>my name {fName+" "+lName}</p>
    <p>copyright {year}</p>
  </div>,
  document.getElementById('root'))
  


