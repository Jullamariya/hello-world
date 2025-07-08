//****** MOUNTING LIFECYCLE METHODS - (VED 23) ******

// METHOD I : CONSTRUCTOR(props)
//- a special function that will get called whenever a new component is created.
//-  it is used for Initializing state Binding the event handlers.
//-  what you shouldn't do in a constructor is Don't cause side effects. Ex : never make a HTTP requests from within a constructor.
//Two imp points in defining constructor:
//- 1) have to call a special fn called super(props) & this will call a base class constructor.
// in component have access to this.props only after calling super passing the props as an arg.
//2)constructor is the only place where you expected to change or set the state by directly overwriting this.state fields in all other senarios need to use this.setState.
//constructor set state find eventhandler and don't cause any side effects life ajax calls.

//METHOD II : static getDerivedFromProps(props,state)
//react documentation classify the method as a rarely used lifecycle method.
//- used 'When the state of the component depends on changes in props over time'. if have a component with intial state of the component depends on the props being passed to the  component in such senario you can use this method to set the state.
//- Since it is a static method it doesn't have access to the this key word (can't call this.state in this particular method).
//instead simply rerturn the object that have new state component.
//- Do not cause side effects. Ex: fetching data from an end point (HTTP requests).
//get derived state from props & use it when state depends on changes in props over time & also don't cause anym side effects.

// METHOD III : render()
//Only required method in a class component.
// simply Read this.props & this.state & return JSX & describes th UI.
//It is a pure fn for given props & state always render the same UI.
//  SHOULDN'T DO : Don't change state or interact with DOM or make ajax calls.
//Since it is the render method JSX also contain Children components right after the parent render method the Children components lifecycle methods are also executed.

//METHOD IV : compnentDidMount()
//Only called once in the whole lifecycle of a given component & Invoke Immediately after a component & all its children components have been rendered to the DOM.
//This method  is perfect place to Cause side effects.Ex: can Interact with the DOM or perform any ajax calls to load data.
//perfect place to intialisation that require DOM notes & also load data by mking network request.

// import React, { Component } from 'react'
// import LifecycleB from './LifecycleB'

// class LifecycleA extends Component { //adding different lifecycle method.(1),(2),(3),(4).
//   constructor(props) {                                   //-------(1)
//     super(props);
//     this.state = {
//       name: 'Julla',
//     };
//     console.log('LifecycleA constructor');   //need this to track the order of execution. can see it in the console.
//   }

//   static getDerivedStateFromProps(props, state) {  //get access to props & state as parameters & has to return newstate or null. //------(2)
//     console.log('LifecycleA getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount(){                         //-----(4)
//     console.log('LifecycleA componentDidMount')
//   }

//   render() {                           //-----(3)
//     console.log('LifecycleA render')
//     return(<div>
//            <div> Lifecycle A </div>
//            <LifecycleB/>
//            </div>
//    )
// }

// }
// export default LifecycleA

//&&---- ORDER OF EXECUTION : ----&&

//LifecycleA consturctor.
//LifecycleA getDerivedStateFromProps.
//LifecycleA render - the render method knows about the children component  the executuion passes to the children component after the parent render method.
//LifecycleB constructor.-then child component method then will get executed in order.
//LifecycleB getDerivedStateFromProps.
//LifeccleB render.
//LifecycleB componentDidMount.
//LifecycleA componentDidMount.- after the child component completely rendered the parent componentDidMount get executed
//it is really important to know the order execution because it help to avoid code that has unexpected behaviour.

//&&----CODE USING UPDATING LIFECYCLE----&&

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Julla",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {      //-----(1)
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {                      //-----(2)
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { //-----(4)
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null                                     //before update snapshot set to be return "null"
  }
  
  componentDidUpdate() {              //-----(5)  the method (2),(4),(5) are also added to the child component.
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {  //defining the changestate method as a class property.
    this.setState({
      name: "Codevolution",
    });
  };

  render() {                      //-----(3)
          
    console.log("LifecycleA render"); //to trigger the update lifecycle you need to change props or state.changing the lifecycle using a button click.
    return ( //after clicking the button the updating lifecycle methods are logged in.              
      <div>
        <div> Lifecycle A </div>
        <button  onClick={this.changeState}> Change state </button>  
        <LifecycleB />
      </div>
    );
  }
}
export default LifecycleA;


//ORDER OF UPDATE (short note)
//all the method executed before "componentDidMount"
//once both child & parent rendered will have a slightly different order for get snapshot get update & component deadupdate.
//1st- child component method then parent. 
// "render"&"componentDidUpdate" are the most commonly used methods during update lifecycle.Others for speciaal case & used sparingly.