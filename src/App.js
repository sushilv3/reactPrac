import React, { createContext, useEffect, useState } from 'react';

import Heading from './Heading';
import Para from './Para';
import List from './List';
import Greeting from './Greeting';
import ComponentA from './contextapi/ComponentA'

  //create context
  const FirstName = createContext();
  const LastName = createContext();

const App = ()=> {

//this useState used in useEffect hook
const [num, setNum] = useState(0);

//useEffect expect function
useEffect(()=>{
  alert('i m clicked');
},[num]);


const state = useState();

const [count, setCount] = useState(0);

const IncNum = () =>{
  setCount(count + 1);
  //  console.log('clicked ', count++);
};

let currentTime = new Date().toLocaleTimeString();

const [curTime,setCtime] = useState(currentTime);

const UpdateTime = ()=>{
  currentTime = new Date().toLocaleTimeString();
  setCtime(currentTime);
};

const [curTime1,setCtime1] = useState(currentTime);
const UpdateTime1 = ()=>{
  currentTime = new Date().toLocaleTimeString();
  setCtime1(currentTime);
};

setInterval(UpdateTime1,1000);

  const purple = "#8e44ad";
  const [bg,setBg]=useState(purple);

  const [btnText,setBtnText] = useState("Click Me");

const bgChange = ()=>{
  console.log("bgChange called" );

  let newBd = "#34495e";
  setBg(newBd);

  let btnNewText = "ooohhhooo";
  setBtnText(btnNewText);
  
};

const  bgBack = ()=>{
  setBg(purple);
  setBtnText("oooofffffoooo!!!!");
};

  return (
   <>
   <Heading />

   <Para />

   <List />

   <Greeting />

   <h1>Increament Counter</h1>
   <h1> {count} </h1>
   <button onClick={IncNum}> Click Me</button>

   <h1>Digial Clock</h1>
   <h1 >{curTime}</h1>
   <button onClick={UpdateTime}>Get TIme</button>

   <h1>Live Digial Clock</h1>
   <h1>{curTime1}</h1>

   <div className="event" style={{background: bg}}>
   <h1 className="event_heading">Click Event Handling</h1>
      <button onClick={bgChange}  onDoubleClick={bgBack} className="event_btn"> {btnText}  </button>
   </div>

   <div className="event" style={{background: bg}}>
   <h1 className="event_heading">Mouse Event Handling</h1>
        <button onMouseEnter={bgChange}  onMouseLeave={bgBack} className="event_btn"> {btnText}  </button>
   </div>


    <hr />
    <br />
        <h1>Context Api</h1>    

        {/**context provide and pass value and takes component*/}
          <FirstName.Provider value={"Sushil"}> 
            <LastName.Provider value={"verma"}>
               <ComponentA /> 
            </LastName.Provider>
          </FirstName.Provider>
          
    <br />
    <hr />

    <hr />
    <br />
        <h1>useEffect hook</h1>  
        <button onClick={()=>{setNum(num+1);}}>click me {num}</button>

   </>
  );
}

export default App;
export {FirstName, LastName};
