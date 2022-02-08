import React from 'react';
import ReactDom from 'react-dom'
import Properties from './Components/Properties';

let fName = "Lokesh";
let lName = "singh";
new Date().getFullYear()
const currentDate = new Date().getFullYear();
// let year = 2019;
ReactDom.render(
  <div>
    <p className="heading">my name {fName+" "+lName}</p>
    <p className="xyz">copyright {currentDate}</p>
    <h1>My Contacts</h1>
    <Properties
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Properties
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById('root'))
  


