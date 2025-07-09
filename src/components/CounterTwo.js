//                                                   VED 37
//                                        how we can share functionality??
//both the codes have constructor & increment count which can be shared between the codes.(a newfile countertwo.js is created).
//the counter compo is the container compo where we impliment the common funtionality.

import React ,{Component} from 'react'


class CounterTwo extends Component {
    constructor (props){
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
        
        return ( //the counterTwo work like take state.count & increment.count & render what ever wanted iy all will be handled by this file.all the 3 files commanded & counterTwo is added in app.
            <div>
            { //this.props.render
            this.props.children
            (this.state.count,this.incrementCount)}
            </div>
        )
    }
}
export default CounterTwo

//In app compo we come across CounterTwo compo in that we have a "count state" & "incrementCount method",in counterTwo doesn't render anything on it's own.
//It will render what ever passed as the "this.props.render" while doing it passes omn count & increment methods. 
//the render prop is the <ClickCounterTwocount={count}incrementCount={incrementCount}></ClickCounterTwo>,the count state & incrementCount method is passed as prop to this compo. 
//the clickCT make use of the passed in props to render the actual UI, when click on button and call increment count method & try to display the count val t is pretty much what the counter compo provided.same happen in case of HoverCompo.
//even though they share same code but there are  difference.  the prop can be called in any name not only "render".
//infact the is a variation of render props pattern which doesn't make use of props but the children.
//instead of render props we pass in the function between the  conpo opening & closing tag.this.props.render changed to this.props.children.
//anything passed between the opening & closing tag of the compo will be passed as the children prop which is then access to render the UI.


