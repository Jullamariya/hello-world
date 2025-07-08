//HOW TO HANDLE EVENTS( this can be used for other events)
//rfce : a react component.
//react events are written using 'camelcase'.
//a fn is passed as an 'eventHandler' ratherthan a string.
//in "onclick" of button we pass the fn as 'eventHandler'
//'EventHandler' is a fn not a fn call.

import React from 'react'

function FunctionClick(){
  function clickHandler(){      //in JS it is possible to have a fn within another fn.   
  console.log('Button Clicked')
  }
    return(
      <div>
      <button onClick = {clickHandler}> Click </button>   
      </div>  
    )
}
export default FunctionClick 
