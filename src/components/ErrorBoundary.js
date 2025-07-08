     //VED - 32 :rce

import React, {Component}  from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        
        this.state ={       //initialise a state prop "hasError:false" 
         hasError:false     //when there is an error while rendering any of the compo setting the state prop hasError:true.
        }                  //this state prop can use for a fall back UI.sso changing render method.
    }
    static getDerivedStateFromError(error){  // 1st METHOD :to become an error boundary need to define getDerivedStateFromError or componentDidcatch   the lifecycle method.
                                            //recieve "error" as a para & within the body simply return a new state obj.set a prop hasError:true.
        return{
            hasError:true
        }
    }
    componentDidCatch(error,info){      //2nd METHOD : this method is used to log the errors.so if have log in service can call in passing in the error & the info para. 
       console.log(error)
       console.log(info)
    } // when open the console will have error obj & info related to error.but during development react automatically logs every error to the console.
    render(){
        if (this.state.hasError){ 
            return <h1> Something went wrong </h1>
        } 
                                    //if there is no error."return this.props.children" refers to the compo actually rendering.
        return this.props.children
        // return(
        //     <div>

        //     </div>
        // )
    }
}                                //final step is to rap the compo with error boundary,so in "app.js" wrap all the hero compo with error boundary compo. STILL SEE THE ERROR.
                                //will continue to see the error but the system try to make it maximum not visible (so click cross sign on the top and continue)
export default ErrorBoundary

                                     //WHERE TO PLACE ERROE BOUNDARIES ?????
//error boundary now enclose all the hero compo,so everything in will be hidden  if there is an "error" a fallback UI is rendered.
//It is also not good to hide the right one to cover the error, so for that in app compo wrap each hero with error boundary.
//so now the UI will display right one & display messsage in the space of error.

                                 //IMPORTANT
// error boundaries catch error during rendering in lifecycle methods & constructors of the whole tree below them.
// It don't catch errors  inside the event handlers.
//If have an onclick handler & want to catch an error need to use the regular "tryCatch" statement not "error boundaries".

//                                         &&---- SUMMARY ----&&

//Error boundaries are React components that catch JavaScript error in their child compo tree,log those errors,& display a fall-back UI.
//A class compo becomes an Error Bounddary by defining either or both of "getDeivedStateFromError" & "componentDidCath" lifecycle methods.
//The placement of thr Error Boundary also matters as it controls if the entire app should have the fall-back UI or jhust the component causing the problem.
//Provide a way to gracefully handle error in application code.

                                                       //VED 34 

