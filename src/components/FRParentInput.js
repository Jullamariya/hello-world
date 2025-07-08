//VED 30 
//rce 
//&&----FORWRADING REFs----&&

//Ref forwarding is a technic for  autoatically passing one of it's components to it's children.
//rfce
//click the input button in the parent compo but the msg recieve in the child compo.
//last section "ref" was used for class component in this section use FRref technique to allow the parent component to directly reference the native input element. 

//STEP 3 : forward the ref to the input element in the child compo. ref forwarding can be done using forward the ref method from react library.
//commading the exsisting code and create new method.

import React,{Component} from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor (props){    
        super(props)   
        this.inputRef = React.createRef() //STEP 1:Create "ref" in parent compo.
    }

    clickHandler = () => {
        this.inputRef.current.focus
    }
    
    render(){    //STEP 2: attach the ref to the child compo using the ref attribute."<FRInput ref = {this.inputRef} />"
        return (
            <div>
            <FRInput ref = {this.inputRef} />
            <button onClick = {this.clickHandler}> Focus Input </button>
            </div>
        )
    }
}
export default FRParentInput

