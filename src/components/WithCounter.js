//VED -34 
                                           //WHY HIGHER ORDER COMPONENTS????

//HIGHER ORDER COMPONENTS - HOC & how can it be used to reuse code.

//A pattern a function takes component as an argument & returns a new component.
// that will look like this : constNewComponent = higherOrderComponent(orginalComponent) - for the newcomponent we pass in the orignal compo as an arg.
//typically a HOC add additional data or functionality to original compo.the new compo is also known as enchanced compo.
//      const EnhancedComponent = higherOrderComponent(orginalComponent)
// eg: const Ironman = withsuit(TonyStark). - "TontStark":original compo,"withsuit" :enchance the TS & return "Ironman " : enchanced compo.
//from react pov: we have fn which accepts the org.compo add functionality & return an enchanced compo or we have an HOC pattern.

//                                     MODIFING HOC
//the counter functionality needed to be shared among the compo ,so modify the HOC.
//Constructor & increment is added to HOC.this is the common functionality that need to share.
//& this piece of code id removed from the others  this is to avoid the duplication of code.
//in HOC we need to pass the increment & state as props so original compo can make use of it. 
//after all the modification the code is being reused not duplicated.

//  import React from 'react'
//  import UpdatedComponent from './withCounter'
 
//  const UpdatedComponent = OriginalComponent =>{               //the uodated compo is a compo which accepts a compo or original compo as it's para.
//     class NewComponent extends React.Component{              //& returns a newcompo. in this case org.compo is "ClickCounter"
//         constructor (props){
//             super(props)

//             this.state = {
//                 count:0
//             }
//         }                                                //the new compo has the functionality to maintain the state of count prop & also a method to increment the count prop.
//                                                         //both are passed as a prop to org.compo,org.comp enchansed with this prop & then returned.
//                                                        //then control goes to "clickcounter" where count & increment pass to HOC are destructured & used in written statement.HOC mainly take care of maintaining the state & incrementing it.
//         incrementCount = () => {  
//             this.setState(prevState => {
//                 return {count : prevState.count + 1}
//             })
//         }
//         render(){                                   // in the render method  we simply return the "Original fn".
//             return <OriginalComponent 
//                      count = {this.state.count}   //now this props can be used in other two.
//                        incrementCount = {this.incrementCount}/> 
//         }
//     }
//     return NewComponent
//  }
//  export default UpdatedComponent
 
 //instead of importing ClickCounter or HoverCounter exporting the HOC to them.
 
//the way  of functioning is same in both click & hover but  both recieve separate state.increment in ClickCounter will not affect the Hover & viceversa.

//&&---- NAMING CONVETION ----&&

//the fn & file name are usually the same it indicates the functionality that will be added to the compo.
// the org compo is refered to as wrap compo that is the compo wrappped with HOC  so change the para & the written statement.



//  import React from 'react'
 
//  const WithCounter = WrappedComponent =>{        
//     class WithCounter extends React.Component{        
//         constructor (props){
//             super(props)

//             this.state = {
//                 count:0
//             }
//         }                                              
                                                       
                                                       
//         incrementCount = () => {  
//             this.setState(prevState => {
//                 return {count : prevState.count + 1}
//             })
//         }
//         render(){                                   
//             return <WrappedComponent 
//                      count = {this.state.count}   
//                        incrementCount = {this.incrementCount}/> 
//         }
//     }
//     return WithCounter
//  }
//  export default WithCounter


//                              VED 35


 import React from 'react'
 
 const WithCounter =( WrappedComponent,incrementNumber)  =>{        
    class WithCounter extends React.Component{        
        constructor (props){
            super(props)

            this.state = {
                count:0
            }
        }                                              
                                                       
                                                       
        incrementCount = () => {  
            this.setState(prevState => {
                return {count : prevState.count + incrementNumber} //now remove "1" & increment don using "incrementNumber"
            })
        }
        render(){ 
            console.log(this.props.name)                                  
            return <WrappedComponent 
                     count = {this.state.count}   
                       incrementCount = {this.incrementCount}
                       {...this.props}
                    /> 
        }
    }
    return WithCounter
 }
  export default WithCounter  