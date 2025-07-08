//                  VED 33
 // WHY THERE IS A NEED OF A HIGHER ORDER COMPONENTS ????

// import React ,{Component} from 'react'

// class ClickCounter extends Component{
//     constructor (props){
//         super(props)

//         this.state = {               //count is initialised to "Zero"
//             count:0
//         }
//     }
//     incrementCount = ()=> {
//         this.setState(prevState => {  //thee setState to increment the val by 1.  
//             return {count: prevState.count + 1} //since we need a prev state to increment the val the arg of setState is not a single val 
//                                               // instead it gets in a fn which gets  prev state as para & returns a new state.
//         })
//     }
//     render(){
//         const {count} = this.state        // extract count from the state & include it in the JSX.
//         return <button onClick ={this.incrementCount}> Clicked {count} times  </button>  //Instead of rendering "X" render count.
//     }
// }
// export default ClickCounter 



//               VED 34
//&&---- HIGHER ORDER COMPONENTS ----&&
//snipet: rce

// import React, { Component } from "react"
// import UpdatedComponent from './WithCounter'

// class ClickCounter extends Component {
//   render() {
//     const { count,incrementCount } = this.props //destructure count & increment to this.props
//     return( 
//         <button onClick={incrementCount}>
//           Clicked {count} times 
//         </button>
//     )
//   }
// }
// export default UpdatedComponent(ClickCounter)

//exporting the updatedcompo HOC passing in the ClickCounter.
//the updatedcompo is defined in  WithCounter.

//                  VED 35
// 1)PASSING DOWN THE PROPS : 
//if a name(name ="Julla") is passed in app component clickcounter & also passed in clickcounter the name is rendered but it  will not be displayed
//this is a mistake becuse the name i passed to HOC not  to ClickCouter.In the HOC in the render method : console.log.this.props.name the name will appear in console.
//to fix the issue need to pass down the remaining props to the wrapped compo using spread operator.

import React ,{Component} from 'react'
import WithCounter from './WithCounter'
class ClickCounter extends Component{

    render(){
        const {count,incrementCount} = this.props      
        return <button onClick ={this.incrementCount}>
            {this.props.name} Clicked {count} times  </button>  
    }
}
export default WithCounter (ClickCounter ,5) 

//2) PASSING PARA TO HOC FN.
//if want to increment the count using diferrent number.What will we do ???
//do that by passing a para to HOC fn in the arrow fn.


