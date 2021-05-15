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

  return (
   <>
   <Heading />
   <Para />
   <List />
   <Greeting />

   <h1> {count} </h1>

   <button onClick={IncNum}> Click Me</button>

   
   </>
  );
}

export default App;
