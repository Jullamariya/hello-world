import React, { Component } from "react";
class Counter extends Component {
  //as it is a state compo we use class compo.
  constructor(props) {
    super(props);
    this.state = {
      //this is an obj with property count.
      count: 0,
    };
  }
  increment() {
    // this.state.count = this.state.count + 1; //changing the state directly count will increase only in console not displayed in UI.
                                                //can only use this in the constructor.(DOs&DON'Ts) 
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count); //thenincrement val is from this statement callback fn consolelog statement.(DOs&DON'Ts) 
    //   }
    // ); //when ever need to execute some code after the state has changed don't place the code right after the setState method, place the code within the callback fn that is passed as the 2nd parameter of statement.
     
    this.setState((prevState,props)=> ({  //passing a fn.
      count: prevState.count + 1    // if fn based on "props" then also add "props" as th "2nd para"
    }) )
    console.log(this.state.count); //the val "0" is from the synchronuous consolelog satement
  }
// when have to upadate sate on base on prevstate then should pass a fn instead of obj (DOs&DON'Ts) 

  incrementFive() {    //react grp a multi setState call to a single update for better performance (all 5 set is done in 1 go anf updated val won't go over each call).
    this.increment();  // if want to update a state  based on a previous state we need to pass fn as an arg into setState method instead of passing fn as an arg.(DOs&DON'Ts) 
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
 
  render() {
    return (
      <div>
        <div> Count - {this.state.count} </div>
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;


//setState

//Always make use of setState & never modify state directly.
//Code has to be executed after the state has been updated ? Place that code in the cb fn which is the 2nd arg  to setState method.
//To update state based on previous state value,pass in a fn as arg instead of regular obj.

