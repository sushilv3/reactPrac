import React, { useContext } from 'react';
import ComponentC from './ComponentC'
import { FirstName, LastName } from '../App';

const ComponentB = ()=>{

    const fname = useContext(FirstName);
    const lname = useContext(LastName);


return(
<>
    <h1>inside of ComponentB.. my name is {fname} {lname}</h1>
    <ComponentC />
</>
);
}
export default ComponentB;