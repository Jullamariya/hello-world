//VED 27 
//react snipet : rfce.

import React from 'react';

function MemoComponent({name})  //within the fn paranthesis the "name" prop destructured.
{console.log('Rendering Memo Component')
    return (
    <div>
       {name}
    </div>
)

}
export default React.memo(MemoComponent)  //this is an higher order component.
//React.memo works with functional component.
//React.memo accepts a component add something thing to that component & return an enchanced component. 
//in this case a component capable of avoiding re-renders when there is no changes in props.
//the parent & memo is rendered & after few sec only parent is re-rendered (it is better to avoid re-rendering of memo component). 
