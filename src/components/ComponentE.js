//                                           VED 39  &&---- CONTEXT ----&&          

import React,{Component} from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext';

class ComponentE extends Component {

static contextType = UserContext

    render(){
        return (//ved 40
             <div>
            Component E Context {this.context}     
            <ComponentF />
            </div>
        ) 
        
    }
}
ComponentE.contextType = UserContext
export default ComponentE

//                                                      VED 40

//now in the render method the usercontext val is available as this.context