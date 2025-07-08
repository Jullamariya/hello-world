//On the click of a button we simply change the msg which is part of a component.
//the reason why using 'EventHandler' is because the way it works in JS & not because how react works.


import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {   //a message is added
    super(props);
    this.state = {
      message: "Hello"
    }
    //this.clickHandler = this.clickHandler.bind(this)
  }
//   clickHandler() {            //to change the msg when the button is clicked.
//     this.setState({
//       message: "Goodbye!"
//     })
//     console.log(this)   
//   }  

clickHandler = () => {   
    // this.setState({        //to change the state.
    //     message : 'Goodbye!'
    // })
    console.log(this)  //instead of setsate method can use log. it will give undefined.
}
//to display the fn we use "Bind" keyword in bind the handler rebder method
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}   
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    );
  }
}  
export default EventBind 

