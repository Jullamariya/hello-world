   //              VED 33          
 //CREATE A HEADING THAT INDICATES THE NO.OF CLICKS ON HEEADNING INSTEAD OF USING BUTTON ????
 
//  import React,{Component} from 'react'
 
//   class HoverCounter extends Component {
//     constructor (props){
//         super (props)

//         this.state = {
//             count : 0
//         }
//     }
//     incrementCount = () => {
//         this.setState (prevState => {
//             return { count : prevState.count + 1}
//         })
//     }
//     render(){
//        const {count} = this.state  //the val is exteacted & displayed as a heading 
//         return (
//             <div>
//                <h2 onMouseOver = {this.incrementCount}> Hovered X times </h2>
//             </div>
//         )
//     }
//  }
//  export default HoverCounter
             
                    
             //VED 34
import React,{Component} from 'react'
import WithComponent from './WithCounter'

class HoverCounter extends Component {
    render(){
        const {count,incrementCount} = this.props
        return (<h2 onMouseOver = {incrementCount}>
                 Hovered {count} times 
                </h2>
        ) 
    }
}
export default WithComponent(HoverCounter,10)  //vedio 35. 
