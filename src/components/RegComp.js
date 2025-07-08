//(VED 26)

//rce-react snipet.

import React, {Component} from 'react'

class RegComp extends Component{
    render(){
        console.log('Reg Comp render')
        return(
            <div>
                Regular Component{this.props.name}
            </div>
        )
    }
}
export default RegComp
