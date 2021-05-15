import React, { useState } from 'react';

import Heading from './Heading';
import Para from './Para';
import List from './List';
import Greeting from './Greeting';




const App = ()=> {

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

   </>
  );
}

export default App;
