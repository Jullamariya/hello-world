// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     //return <h1>Class Component</h1>
//     return (
//       <h1>
//         Welcome{this.props.name} a.k.a {this.props.heroName}
//       </h1>
//     );
//   }
// }
// export default Welcome 


import React , {Component} from  'react'

// class Welcome extends Component {
//   render(){
//     return (
//       <h1>Welcome {this.props.name} is {this.props.heroName}</h1>
//     )
//   }
// }
// export default Welcome

//DESTRUCTURING THE CLASS

class Welcome extends Component {
  render(){
    const{name,heroName} = this.props        //destructuring ocuure inside the render.
    //const{state1,state2} = this.state     //destructuring can be done using states too & this is the syntax.
    return (
      <h1> Welcome {name} is {heroName}</h1>
    )
  }
}
export default Welcome
