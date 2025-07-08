import React from "react";

function Person({ person}){  // destructuring the person prop in the parameter.
    return (
        <div>
        <h2> 
        I am {person.name} & I am {person.age} years old. I know {person.skill}
         </h2> 
        </div>
    )
}//everything changed in terms of 'person' because person represent the obj in the list, properties we need is the dot operator.
export default Person

