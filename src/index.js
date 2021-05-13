import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Para from './Para';
import List from './List';

import App from './App'
import Greeting from './Greeting';
import './index.css';


const fName = "sushil";
const lName = "verma";

//template literals
console.log(`my name is ${fName}`);
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/350";
const img3 = "https://picsum.photos/300/400";
const img4 = "https://picsum.photos/350/450";

const link1="https://www.tickertape.in/";

const heading1 = {
  color: 'grey',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontFamily: 'Architects Daughter',
  textShadow: '0px 2px 4px rgb(45, 45, 146',
  fontFamily: '"Architects Daughter", cursive'
  
};
const mb = {
  marginBottom: '20px'
};



// let currentDate = new Date();
let currentDate = new Date(2021,5,5,14);
// new Date(year, month,date, hrs,)
console.log(currentDate);
currentDate = currentDate.getHours();

console.log("@@@@@@@@@@@@@@@@@ " + currentDate);

let greeting = '';
const greetingStyle = {};

if(currentDate >= 1 && currentDate < 12){
  greeting = 'Good Morning';
  greetingStyle.color = "green";
}else if(currentDate >= 12 && currentDate < 19)
{
   greeting = 'Good AfterNoon';
   greetingStyle.color = "orange";
}else{
  greeting = 'good night';
  greetingStyle.color = "black";
}


ReactDOM.render(
  <>
    <h1 contentEditable="true">hello {fName +" "+ lName} {2+9}</h1>
    <h1>hello {`my name is ${fName} and last name is ${lName}`} </h1>
    <p> paragraph {Math.random()} {lName}</p>

    <img src={img1} alt="random"/>
    <img src={img2} alt="random"/>
    <img src={img3} alt="random"/>
    <a href={link1} target="_blank">
      <img src={img4} alt="random"/>
    </a>

    <h3 className="heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </h3>

    <h3 style={heading1}>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </h3>

    <h1 style={mb}> Hello Mr. <span style={greetingStyle}> {greeting} </span>{currentDate} </h1>
  
    <Heading />

    <Para />

    <List />

    //this App component comsists Heading,List and Para Components 
    <App />

  <Greeting />
  
    </>,
  document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
