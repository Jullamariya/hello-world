//***** WORKING WITH FORMS IN REACT. *****

//in regular html form elements like "input","textarea", & so on responsible for their on to handle  the UI & update the respected value.
//but we want is for the react to control the element such elements whose val is controlled by react is called : CONTROLLED COMPONENT .

//consider an input element can have a value,also change on user interaction (eg:e-mail),
// we use "state" & "setState" to deal with the value which change with in the component.
//In controlled component the val of input field ids set to the state prop.

//              this.state={ email:''}

//an onchange event will be fired whenever there is a change. so in "onchange" handler use "setState" method to update the "state".

//       this.changeEmailHandler = (event)=>{this.setState({email:event.target.value})}

//when "state" get updated, render method is called & "new state" get assign as a val into the input element.

// <input type = 'text' value ={this.state.email}   onChange ={this.changeEmailHandler} />

//the cycle  of setting the initial val from the "state" propagating the changed val into the "state" & then back to the iput field.
//react will always have access to the "state" which reflects updated val of the form elements.that "state" obj can then be used to submit the form data needed.

//***** HOW all of these translate to code???? *****

//to convert a regular htnl form to a controlled react component need two steps :

import React, { Component } from "react";

class Form extends Component {

constructor (props){    // step1 : Is to create a component state that will control the val of  the input element. so with in the component snifet "rconst"   to create a constructor.
    super(props)
    this.state ={
       username: '',  //initialised it into an empty string then assign the state val to the input element 
       comment:'',
       topic:'react',
    }               //step2 : handling the on ChangeEventHandler
                 
}

handlerUsernameChange = (event)=>{ // define the handlerUsernameChange method as a class change prop & the prop will be equal to an arrow fn - it happens when assign the handler to the onchange event the event itself will pass as a parameter to handler.
   this.setState({
        username: event.target.value
   })                             // so have one parameter called "event".                             
}                                //from this event can extract the val of input element using event.target.value any time changeval the val will be captured using this.
                                //then assign the captured val back to the state prop & to update state use setState method.
                               //now output get typed due to the controlled component & react is a single state of truth for this element. "username" a state prop which has a val at "value" attribute.when there is a change a new val get propagate to the "handlerUsernameChange " which set back "state" prop username to update val.
                              //change set render method called again & new val available for val prop - HOW GET A CONTROLLED COMPO.
  
   handleCommentsChange = event => {
    this.setState({
      comments:event.target.value
    })
   }       
   
    handleCommentsChange = event => {
    this.setState({
      topic:event.target.value
    })
   }       


    handleCommentsChange = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
    event.preventDefault()      //when alert is canceled page get refreshed & all the data is gone so this will prevent the data lost.  
   }       
   
  //suppose don't have a form tag with wich can listen to the on submit event then create a button create  onClick event handler on that button & have exact same body as the on submit event.
  //desrutcturing the "state" method in render 
  render() { 
    const{username,comments,topic} = this.state //so can remove the this.state from all the "value" given below.
    return (
      <form onSubmit = {this.handleSubmit}> 
        <div>
            <label> Username </label>
           < input 
            type ="text" 
            value = {username} 
            onChange = {this.handlerUsernameChange}
           />   
        </div>
        <div>                    
          <label> Comments </label>    
          <textarea
           value={comments}
           onChange = {this.handleCommentsChange}>
           </textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value= {topic} onChange = {this.handleTopicChange} >
            <option value = "react">React</option>
            <option value = "angular">Angular</option>
            <option value = "Vue">Vue</option>
          </select>
        </div>
        <button type="submit" >Submit</button>  
      </form> //type = "submit" will give the user the ability to submit  by hitting the enter key is always good. 
     );
  }
}
export default Form;


//CREATE A CONTROLLED COMPO TO SETAREA AS WELL AS SELECT TAG.
// 3 steps:
//at element html  assign component state to element val & assign an onchange handler that update the state.
//stepI : adding the html : within the form a new div tag is added & a label called comments.
//step II : assign component state to the element val. new state - comments initialised to an empty string  & this is passed as a val in textarea.
//step III : assign the change handler to the state.


// ******LIFECYCLE METHODS***** ver.16.4 and above.
//when create a react component components goes throguh several cycles in it's lifecycle.
//react provides us build in method that can be over written in it's particular stages in the lifecycle.
//this methods don't exsist on a functional component.
//the new feature propposal of hooks  effect partially relate to the lifecycle of hooks.

//classify the method into 4 phases:
//-MOUNTING : these are called "when an instance of a component is being created & inserted into the DOM".
//* constructor,staticgetDerivedStateFromProps,render & componentDidMount.

//-UPDATING: When component is being re-rendered as a result of changes to either its props or state.
//staticgetDerivedStateFromProps,shouldComponentUpdate,render,getSnapshotBeforeUpdate & componentDidUpdate.

//-UNMOUNTING: when a component is being remived from the DOM.
//componentWillUnmount.

//-ERROR HANDLING: When there is an error during rendering,in a lifecycle method,or in the constructor of any child component.
//staticgetDerivedStateFromError & componentDidCatch.
