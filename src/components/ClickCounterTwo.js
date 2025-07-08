//                                                       VED - 36
//                                          &&---- RENDER PROPS PATTERN ----&&
//Why there is a need for render props ????
//another pattern for sharing codes between react compos
//click funtionality is generallly replaced by hover fn.
    
import React , {Component} from 'react'

    class ClickCounterTwo extends Component{
        constructor (props){
            super(props)

            this.state ={
                count : 0
            }
        }
        incremenentCount = () =>{
        this.setState (prevState =>{
            return {count : prevState.count + 1}
        })
        }

        render(){
            const {count} = this.state
            return (
                <div>
                <button onClick = {this.incrementCount}> Clicked {count} times </button>
                </div>
            )
        }
    }
    export default ClickCounterTwo

