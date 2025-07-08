//                              VED 37

import React ,{Component} from 'react'

class Counter extends Component {
    construcrtor (props){
        super(props)

        this.state ={
            count:0
        }
    }
    incrementCount = () => {
        this.setState (prevState => {
            return {count : prevState.count + 1}
        })
    }
    render(){
        const {count} this.state
        return (
            <div>
<h2 onMouseOver = {this.incrementCount}> Hovered {count} times </h2>
            </div>
        )
    }
}
export default Counter
git 