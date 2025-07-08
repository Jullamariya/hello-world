import React,{Component} from 'react'
class Message extends Component{
    constructor(){             //to change the "Welcome Visitor " msg we use 'state'
super ()                      //this is required because we use react  component class so a call has to be made to the main base constructor.
this.state ={                  //as we are inside the class need to usr 'this' keyword.
message :'Welcome Visitor'    //to bind the val with render fn use "this.state" - similar to props.
}                            //as we use 'state' now have the ability to change msg.so create a button & change the msgon the click of the button.
    }                       //so need to write a button html.
    changeMessage(){
        this.setState({                     //this is method accepts an obj which is nothing but a new state of the component.   
        message:'Thankyou for subscribing'  //'state' is an obj privately maintained in a component.& can also changed with in the component.
        })
    }
    render(){     
        return (
            <div>    
             <h1>{this.state.message} </h1>     
               <button onClick = {() => this.changeMessage()} >Subscribe</button>                                                       
            </div>
        )
             
    }
}
export default Message
 