//WHAT IS REACT????
//react an opensource  js library for building user interfaces.
//it is not a framework but a library : determined to do one thing & doing the one thing really well.
//dosen't focus on other aspects on you prgm but only on the "USER INTETFACES"
// rich with the ecosystem & place really we and capable of creating really well 'web applications'

//&&&----WHY DO WE WANT TO LEARN REACT-----&&&
//Create & maintained by FB.
//maintqained by a huge community\
//demand skillset

//&&&----TECHNICAL ASPECTS OF REACT-----&&&





// it has a "COMPONENT BASE ARCHITECTURE"
//used to make more complex UI
//it contain: 1)HEADER 2) SIDENAV 3) MAIN CONTENT 4)FOOTER

//component also make it possible make 'Reusable code'
//eg: an 'article' in a react ccan be used in other like angukar,Vue(widely used frameworks/librarires in js)

//REACT IS DECLARATIVE
//Tell what you want & React will build the actual UI.
//When data changes react will handle efficiently updating & rendering of the components when the dats changes.
// DOM updation expensive work done by react.

//Seamlessly inregrate react into any of your applications.
//Portion off your page or a complete age or even an entire application itself.
//React naative for mobile applications.

//&&&&&-----PREREQUISITES-----&&&&&
//HTML,CSS,JS fundamentals.(required)
//ES6
//learning react from 'SCRATCH'.

//Create-react-app package
//is using "npx" : it is an 'npm package runner' which get installed when node.js installed.

//NMP
//create-reacr-app is installed globally to generate the projects.
//step 1: to instal package command:"create-react-app-g"
//step 2: to run command :"creatw-react-app <project_name>"(eg:hello_world).

//Component represent a part of a UI & building blocks of any react application.
//it can also contain other components
//component code is usually place in a 'js file'.
//app compnent is placed in app.js
//also can have components for app.jsx extension.
//more complex the application more the no.of components.

//Component Types
//1) Stateless Functional Component
//- js fns: which describes UI- they can optionally recieve objects of props and return HTML which describes the UI.
//HTML in form of JSX
//eg: function Welcome(props){return <h1>Hello,{props.name(eg:Julla)} </h1>;}

//2) Stateful class Component.
//regular ES6 classes  that extend the component class at library .
//Must have a rendering method returning HTML.
//eg: Class Welcome extends React.Component{render(){return <h1>Hello,{this.props.name} </h1>}};

//**************************** *//
//&&&---STATELESS FUNCTIONAL COMPONENTS (functional exports)---&&&

// import React from 'react'

// function Greet(){
// return <h1>Hello,Julla</h1>
// }

//rewriting the fn useing arrow fn syntax.

//const Greet = () => <h1>Hello,Julla</h1>

//can also export them as named export : export const Greet = () => <h1>Hello,Julla</h1>(have to import with exact same name)
//export default Greet  //as we export the fn as a default fn we can import them in any name.

//&&&---STATEFUL CLASS COMPONENTS (functional exports)---&&&

//they are basically ES6 classes : this can also recieve props & return HTML(JSX)
//apart from the props a class comp.can also maintain a private internal state(it can maintain some infod private to that component & use to describe the UI)

        //FUNCTIONAL COMP                                          //SIMPLE COMP

//-simple fn reciving props &returning declaratins            //feature rich
//advantage: absence of 'this' keyword.                       //maintain thier own private data:state.
//solution without using state.                               //complex UI logic
//not complicated mainly responsible for UI.                  //provide lifecycle hooks.
//Functional compo also called stateless/Dumb/presentational.  //stateful/smart/container
//as per the new update hooks can also be used in functional.

//HOOKS : no breaking changes(no code break).
//completely opt-in & 100% backwards-compatible.
//using state,lifecycle methods & 'this' binding.

//JSX - JavaScript XML
//Extension to the JavaScript language syntax.
// it is also an extension to write XML - like code for elements & components.
//JSX tags have a tag name,attributes,& children.
//JSX is not a necessity to write React applications.JSX makes your react code simpler & elegant(provide syntax which is familiar to many developers).
//JSX ultimately transpiles to pure JavaScript which is understood by browsers.

//&&&&----JSX Differences----&&&&
//Class -> className (replaced)
//for -> htmlFor
//camelCase property naming convention:
//1)onclick -> onClick
//2)tabindex ->tabIndex


// import React from "react";

// const Greet = props => {   //using props as a parameter.
//   console.log(props);
//   //props.name = 'Avengers'
//   return (
//     <div>            

//     <h1>
//         Hello {props.name} a.k.a {props.heroName}    
//     </h1>                                         
//     {props.children}
//     </div>
//   )
// }
// export default Greet;

//every components return JSX used in the UI.


              //PROPS                                          //STATE

//props get passed to the component.                 //state is managed within the component. 
//function parameters.                               //var declared in the fn body.
//immutable(parents can't be changed by children)    //state can be changed.
//props - Functional Components.                     //useState Hook - Functional Components.
//this.props - Class Components.                     //this.state - Class Comp onents.


// import React from "react"

// const Greet = props => {         
//    console.log(props)
//   return (
//     <div>            
//     <h1>
//         Hello {props.name} a.k.a {props.heroName}    
//     </h1>                                         
//     </div>
//   )
// }
// export default Greet;


//DESTRUCTURING : it is an ES6 feature that make possible to unpack val from arrays or extract properties from object
//it make react code easily readable.


//*********  DESTRUCTURING THE PARAMETER.***********

// import React from "react"

// const Greet =({name,heroName}) => {         //'name & heroName' are extracted from props.

//   return (
//     <div>            
//     <h1>
//         Hello {name} a.k.a {heroName}    
//     </h1>                                         
//     </div>
//   )
// }
// export default Greet;

//*********  DESTRUCTURING THE FN.***********

import React from "react"

const Greet = props => {         //'name & heroName' are extracted from props.
   const {name,heroName}= props  //both used in JSX.
  return (
    <div>            
    <h1>
        Hello {name} a.k.a {heroName}    
    </h1>                                         
    </div>
  )
}
export default Greet;

