//                                           VED 39  &&---- CONTEXT ----&&          

import React,{Component} from 'react'
import {UserConsumer} from './UserContext'

class ComponentF extends Component {
    render(){
        return( //in between the opening & closing tag of the consumer compo we need a fn we explain it using curly braces.an arrow fn.
               //here we are passing a fn as a child to the consumer component,thje consumer component provide the username to the child.Compo F recieve the username & render it as partt of JSX.
                //we have successfully provided a val to the deepest nested compo without having to pass a prop to every inter mediate compo.
            <UserConsumer> 
                {username =>{
                return <div> Hello {username} </div>
                }}
            </UserConsumer>
        )
    }
}
export default ComponentF

//                                                      VED 40
//&&---- CONSUMING MULTIPLE CONTEXTS ----&&

//function Context(){
//return (
// <ThemeContext.consumer>
//{theme => (
    // <UserContext.Consumer>
    //     {user => (
    //         <ProfilePage user = {user} theme = {theme} />
    //     )}
    //     </UserContext.consumer>
    //     )}
    // </ThemeContext.consumer>
    //     );
    //   }

//                                                    VED 41

//                                           &&---- REACT & HTTP ----&&

//  


//