//VED 31 - REACT PORTALS 
                                         //WHAT REACT PORTALS DO FOR US ???

//It provide a way to render childreninto a DOM node that exsist outside the  DOM heirarchy of the parent compo. 
//In index.html the element is element with id= "root"& in index.js file use ReactDOM.render & mount the app component to the root element.
//checkin the browser every single react compo in application falls under the root element .that is div element with id = "root"
//what react portals provide is the ability to break out of the DOM tree. so can render a compo to DOM node that is not under root element.

//STEP1: is to add a DOM noode which falls out the root element.
//so index.html write another div tag with id ="Portal-root" below the root element.
//STEP2: new commponent is created - "Portaldemo.js". Still the h1 will b under "root".
//STEP3: "ReactDOM.createPortal" method is used inside the compo under the "portal-root" node 



import React from 'react'
import ReactDOM from 'react-dom'      //so in poratal demo component & the top we need to import the react DOM packakage.
function PortalDemo(){               //making a fn compo.
                                    //then in the render method instead of simply returning the JSX - return ReactDOM.createPortal 7 the method takes 2 para.
     return ReactDOM.createPortal( //para1)h1 - portal demo.
        <h1>
        Portals demo  
        </h1>,
        document.getElementById('portal-root')//para2) the DOM node to mount the element on to.
    )
}                            //now the h1 tag will move to "portal-root".
                            //so react applicatn even though all the compo children to the app compo & app compo mounted to the root DOM node it is possible to break away from that & mount on any DOM node that wish to use in react portals.
export default PortalDemo

//the first para to create portal that can be any element that react can render (num,strings,JSX,even compo.)

                                        //WHY D0 REACT PORTALS NEEDED???

//one of the use case : to deal with the parent compo CSS when the child compo is a model,pop-up or a tool tip.
//example made by "kentcdodds"

