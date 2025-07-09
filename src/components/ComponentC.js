

//                                          VED 38  &&---- CONTEXT ----&& (component C,E,F & usercontext)
//context provides a way to pass data through the compo tree without having to pass props down manually at every level.

//WHAT IS THE NEED OF CONTEXT API ???

//consider a react application that has lots of components,we have "App Component" which is a root compo & nested with in the "App Compo" several other compos
//at first level have "A,B,C" - "D", "E & F" are nested in "B & C" respectively & "F" nested in "E".3 levels in total.
//requirement in application is that the compo "A,D & F" are supposed to log in the "userName". that info is maintained as a prop in "App Compo",to dispay username need to pass down the "username" as a prop.
//for "A" it is straight.just pass it as props.
//as "D" an intermediate the compo has to pass to "B" then to "D". Similar for "F".
//even though "B,C,E" don't want the prop but still want to pass it  through them for the compos further down.
//what if want to pass a prop to 5 to 10 level deep compo all the compo in between would have to forward the prop this will create a prblm for props like language preference,UI theme & authenticated users are pretty much required by many compos in an application
// it would be nice to pass the prop to the required compo instead of manually drilling it down to every level.this is where we use "CONTEXT".


//                                                  VED 39  &&---- CONTEXT ----&& 
 
//to study the "context" take "C,E,F"                                              
// 1) Create the  context.: created a new file ""
// 2) Provide a context value.
// 3) Consume the context value.        

import React,{Component} from 'react'
import ComponentF from './ComponentF'  

class ComponentC extends Component {
    render(){
        return <ComponentF/>
    }
}
export default ComponentC

//                                            VED 40


