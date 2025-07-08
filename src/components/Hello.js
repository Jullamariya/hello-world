import React from "react";

const Hello = () => {
  // return(
  //     <div className = 'dummyClass'>
  //         <h1>Hello World</h1>
  //     </div>
  // )

//writing the component without the help of jsx.
//to do that the library provides "createElement" method. 
 
  return React.createElement( //this method at minimum accept 3 parameters.
    'div',
    // null,                                                      //optional props.
     {id:'hello',className:'dummyClass'},   // null vvhamged tp an "id" it is basically an obj of keyval pairs (added the class & id attributes to "div" in html.)
                                           //in js class should be specified by writing "className"
    'h1',                                                      //the "h1" tag divide into 3rd parameter (h1Hello Julla ).
     'Hello Julla' ,                                          //children for the tag,adding an h1 tag.
  ('div',null,React.createElement('h1',null,'Hello Julla'))  //tomake it right we call the createElement again.        
          
  );
};

export default Hello;
