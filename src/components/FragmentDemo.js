//&&----REACT FRAGMENTS----&& (VED 25)
//generally let to group the list of children element without adding extra node to DOM.
//Example:

import React from 'react'

function FragmentDemo(){
          //anytime component has to written in multiple eleement enclose then in a div tag.  
         //if inspect the enclosing div tag  will be included in the DOM tree, div tag between app and demo component. will have a additional div tag.
        //in such conditions use react fragments which will get rid of the extra node addded. 
        //div tag replaced by "React.Fragment".
return (  
    <React.Fragment>  
    <h1> Fragment Demo </h1>
    <p> This describes the Fragment Demo component </p>
    </React.Fragment>
)
}
export default FragmentDemo
