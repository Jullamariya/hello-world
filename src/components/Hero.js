      //VED -32 : rfce
                                    //&&---- ERROR HANDLING PHASE METHODS ----&&
//this includes 2 lifecycle methods:
// 1)static getDerivedStateFromError(error)
// 2)compnentDidCatch(error,info)

//the runtime  error during rendering put our application in a broken state.react basically unmounts the the whole react compo tree.
//what if identify the error & display a fall back UI this where we use "error boundaries".

                                           //&&----ERROR BOUNDARY----&&

//A class component that implements either one or both of the lifecycle methods "getDerivedStateFromError"or "componentDidCatch" becomes an error boundary.
//The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown & the compnentDidCatch method is used to log the error info.



import React from 'react'

function Hero  ({heroName}){               //heroName as a para.
    if (heroName === 'Joker'){            //if heroname "joker" throw an error.
       throw new Error ('Not a hero!')   //throwing an error.
    }                                   //passing heroname in "App.js".as passing "Joker" as heroname the wholr application is crashed.
                                       //if a particular compo throws an error only that should fall back in into a UI & remaining left uneffected achieve it using an error boundary.
                                      //creating  NEW FILE "ErrorBoundary.js"
    return(
        <div>
            {heroName}
        </div>
    )
}
export default Hero