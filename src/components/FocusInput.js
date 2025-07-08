// VED-29
// react snifet -rce
//Ref can only get attached to "class compo" no "fn compo"
//when the iput element in the parent is clicked the iput elemnt of the child  should recieve it.
//achieve it using "Ref".

import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef(); //STEP 1: Create a "Ref" in parent compo (Focus Input compo) using create.Ref method.
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    //STEP 2: attach "ref" to the component "<Input ref = {this.componentRef} />"
    //STEP 3: attach a click Handler.
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}> Focus Input </button>
      </div>
    );
  }
}
export default FocusInput;




