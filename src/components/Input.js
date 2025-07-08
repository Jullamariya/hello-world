//VED 29  

//react snifet - rce
//It is possible to add a Ref to class component.
// focus on element using "componentDidMount" but in this case we create a method that inturn focus on element.
//that method will be called by a parent element.
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    // basically have an input element & a method focus on input which is when called an element will focus on an input.
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default Input;
