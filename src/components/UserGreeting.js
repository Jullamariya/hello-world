//CONDITIONAL RENDERING
//works the same way conditions works in js

// Four different approaches 
//1)if/else
//2)Element variables 
//3)Ternary conditional operator : it is better to use 3&4 because it's more helpful & easily readable.
//4)Short circuit operator

import React,{Component} from 'react'

class UserGreeting extends Component{
   
constructor(props){
    super(props)
    this.state ={
isLoggedIn : true //message is conditionaly rendered using this "IsLoggedIn" (condition) 
    }              //logged in "Welcome Julla" not then the other. 
}
 render(){ //IV)***SHORT CIRCUIT OPERATOR***

 //it is a specific case of Ternary operator approach
//when want to render something or nothing make use of short circuit op
//render 'Welcome Julla' or nothing.
return this.state.isLoggedIn && <div>Welcome Julla </div> 
                                                     //expression first evalute the left side.if it's true then nxt line is executed.
                                                    // if left side is wrong hten the right is not executed and result given without making any disturbance in the code.
//III) ***TERNARY CONDITIONAL OPERAATOR***

//Benefit: it can be used inside JSX.
//keeps the code simple & readable.

    // return (
    //     this.state.isLoggedIn ? //conditional statement.Is evaluted either to true/false. 
    //     <div>Welcome Julla</div> : 
    //     <div>Welcome Guest</div>
    // )

//II)***ELEMENT VARIABLE APPROACH***

//  use js elemets to store variables.
//this will also help to conditionaly render the entire component ot only a part of the component.
//declare a varible (let message) inside render & then store the appropiate element in the var based on the condition (this.state.isLoggedIn)

    // let message    //message is the var that stores the element to be rendered.
    // if (this.state.isLoggedIn){      
    //     message = <div>Welome Julla</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


     //I)***if/else APPROACH***

//to achieve the condition using if/else

    // if(this.state.isLoggedIn){  //the if/else statement should be outside the JSX & the entire return statement is written inside.
    // return (
    //     <div>Welcome Julla</div>
    // )    
    // }else {
    //     return (
    //         <div>Welcome Guest</div>
    //     ) 
    // }

        // return (<div>
        //     <div>Welcome Julla</div>
        //     <div>Welcome Guest</div>
        // </div>
            
        // )
    }
}  
 export  default UserGreeting

