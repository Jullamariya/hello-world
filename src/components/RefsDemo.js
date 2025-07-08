//VED 28
//Refs make it possible to axccess DOM nodes directly with in react.
//eg:commonly used exa,mple "text inputs"
//eg: A login form - as soon as page is loaded by default the "username"  inpiut to be focused.
//.do this using 3 simple steps 

//&&----CREATE REF METHOD----&&
//STEP 1: create a "Ref" - using "React.createRef" method.
//STEP 3: Is to call the input element into the "Ref method".

//What is the prop this.inputRef hold after reference is created.
//componentDidMount is created & into the hook a "console" is added.
//Ist case to use focus:
// check the console can see an "obj" logged in the console.If expand a property calleed "current:input" can be seen ,cuurents points to the actual DOM node. 
//So to focus on the input element - In componentDidMount simply call focus method on the current prop.- this.inputRef.current.focus()(now the type  bar will appear in input)
//If the field was a part of a login form  the focus will be on "username-feild" & the user can start typing. 

//IInd case to use focus: To fetch  the input value
// a button created onclick assigned to a clickHandler & clickHnadler is defined.It is an arrow fn.
//accessing the val property of input DOM node which available as current prop. 

//                    ***********************

// import React,{Component} from 'react'

//  class RefsDemo extends Component{
//     constructor (props){
//         super(props)
//         this.inputRef= React.createRef() // added a new prop "this.inputRef" & to this prop assigned "React".it is common to use refernce in the compo so thet can be referenced throughout the compo.
//         // this.cbRef = null
//         // this.setCbRef= element => {
//         // this.cbRef = element
//         // }
//     }

//     componentDidMount(){
//        if (this.cbRef){
//         this.cbRef.focus()
//        }
//         this.inputRef.current.focus()
//         console.log(this.inputRef)
//     }

//     clickHandler = ()=> {
//         alert(this.inputRef.current.value)
//     }

//     render(){     //STEP 2 : To attach the Ref into the input element in the render method.to attach make use of reserved Ref attribute. (now have ref to input element).
//     return(
//         <div>
//         <input type ="text" ref = {this.inputRef}/>   
//         {/* <input type="text" ref={this.setCbRef} /> */}
//         <button onclick= {this.clickHandler}>Click</button>
//         </div>
//     )
//     }
// }
// export default RefsDemo

//                    ***********************                

//&&----CALLBACK REFS----&&
//It is slightly an older method.


 
import React,{Component} from 'react'

 class RefsDemo extends Component{
    constructor (props){
        super(props)
        this.inputRef= React.createRef() 
        this.cbRef = null                //STEP1:Create the Ref: in this method we create a val and assign it to null - "this.cbRef = null" approach.
        this.setCbRef= element => {     //STEP2:Create a method that will assign a DOM element to the  Ref that have created in 1.
        this.cbRef = element           //the element called is assigned to call-back ref."this.cbRef"        
        }
    }

    componentDidMount(){ //STEP4 : 
                         //react will call  the "ref callback" element when the comoponent mounts & call it with "null" when it unmounts.  
                        // so it i important check a val  exssistd on the reference prop & not null.
      if (this.cbRef){    // to check it is not null.only then cb Ref is called &n then the "Focus method"
        this.cbRef.focus() //unlike the prev approach the DOM node is directly access using Ref prop & don't need current.
       } //as refresh 2nd input have the focus.
        
    }

    clickHandler = ()=> {
        alert(this.inputRef.current.value)
    }

    render(){  //STEP3: Attach the Ref to the input element -<input type="text" ref={this.setCbRef.    
    return(
        <div>
        <input type ="text" ref = {this.inputRef}/>   
        {/* <input type="text" ref={this.setCbRef} /> */}
        <button onclick= {this.clickHandler}>Click</button>
        </div>
    )
    }
}
export default RefsDemo
//inptut element is implicitly passed as a parameter which is assigned to call-back ref prop. 