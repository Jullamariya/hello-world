//                                                       VED - 36
//                                          &&---- RENDER PROPS PATTERN ----&&
//Why there is a need for render props ????
//another pattern for sharing codes between react compos
//click funtionality is generallly replaced by hover fn.
    
// import React , {Component} from 'react'

//     class ClickCounterTwo extends Component{
//         constructor (props){
//             super(props)

//             this.state ={
//                 count : 0
//             }
//         }
//         incremenentCount = () =>{
//         this.setState (prevState =>{
//             return {count : prevState.count + 1}
//         })
//         }

//         render(){
//             const {count} = this.state
//             return (
//                 <div>
//                 <button onClick = {this.incrementCount}> Clicked {count} times </button>
//                 </div>
//             )
//         }
//     }
//     export default ClickCounterTwo

    //                         VED37
    

import React , {Component} from 'react'

    class ClickCounterTwo extends Component{
        render(){
            const {count,incrementCount} = this.props //As the fn  is changed in app.js the para is changed.
            return ( //this.increment changed to increment.doing the same for "HoverCounterTwo"
                <div>
                <button onClick = {incrementCount}> Clicked {count} times </button> 
                </div>
            )
        }
    }
    export default ClickCounterTwo

