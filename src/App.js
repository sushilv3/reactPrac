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

   
   </>
  );
}

export default App;
