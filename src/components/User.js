
                                                   //VED 37
                                          // WHAT IS RENDER PROPS ????
                                          
import React, {Component} from 'react'

class User extends Component {
    render(){
        return (  //STEP1: Instead of hardcoding the name "Julla" we write a code here.write the name in the app compo.
            <div>
             {this.props.name (true)}
            </div>
        )
    }//instead of simply passing the string "julla" now passing a fn & add the fn to it.now adding para & based on para it is renered by the used compo. 
}//the .name is changed to render & it will not cconflict with the render life cycle method.
//*IMP: in react it is possible to use a prop whose val is a fn to control what is actually rendered by a compo.
export default User 

//&&---- RENDER PROPS ----&&

//The term "render prop" refers to a technique for "sharing code" between React components using a "prop whose val is a fn".

