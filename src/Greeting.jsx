import React from 'react';

function Greeting(){

    let currentDate = new Date();
// let currentDate = new Date(2021,5,5,14);
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

return (
    <>
        <div>
             <h1> Hello sir, <span style={greetingStyle}>{greeting}</span> </h1>
        </div>
    </>  
);
}
export default Greeting;

