 //    VED -26

// import React , {Component} from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'

// class ParentComp extends Component {

// constructor(props){           //need to change the state.
//     super(props)

//     this.state = {
//         name :"Julla"
//     }
// }

// componentDidMount() 
// {                          //with in the body a timer is created.
//     setInterval(()=>      //the timer set to be an arrow fn
//     {
//         this.setState({   //with in the arrow fn the set state property ia again set to 'Julla'
//             name:'Julla'
//         })

//     },2000)
// }
//     render()
//     { console.log('Parent Comp render')   //to know when the render method happen in all the 3 files render method is written.
//                                          // reg & pure compnent passing name as a prop.
//         return (
//             <div>
//                 Parent Component
//                 <RegComp name={this.state.name}/>
//                 <PureComp name={this.state.name}/>
//             </div>
//         )
//     }
// }
// export default ParentComp

//in app.js the purecomp replaced by parentcomp.

// after  writing the console in all 3 the render act like this.
//parent render called reg then puren later every 2 sec setState method called & re-render parent & as parent re-render child also get re-rendered unless get false from should compo update.
//the 'purecomp' is not re-rendered again.


//PURE COMPONENT                                                        //PURE COMPONENT
//A regComp doesn't implement the 'shouldComponentUpdate method.'      // pure component  on the other hand implements 'shouldComponentUpdate' with a shallow props & state comparison.
//It always returns true by default.
//only work  with class based compo.
//they help in a better working.
//SHALLOW COMPARISON (SC) (wrt.primitive & complex type)

                  //Primitive Typeds eg: nums,strings & bool                                           //Complex Types
                                           
//a (SC)b returns true if a&b have the same value & are of the same type.    //a (SC)b returns true if a&b refrence the exact same object.              
//Ex: string `Vishwas`(SC) string `Vishwas` returns true.                    //var a =[1,2,3];- obj                                       //var a = {x:1,y:2};
                                                                             //var b =[1,2,3];-obj                                        //var b = {x:1,y:2};
                                                                             //var c = a;(as "a" assigned to "c"- SC will be true)        //var c = a;
                                                                             //var ab_eq = (a===b); false (refer to different obj)        //var ab_eq = (a===b); false
                                                                             //var ac_eq = (a===c); true (refer to same obj)              //var ac_eq = (a===c); true

//----(SC OF PROPS)----:

//A pure component implements 'shouldComponentUpdate' with a 'shallow prop' & 'state comparison'.
//SC of prevState with currentState.
//SC of prevProps with currentProps.if only SC indicates a diffference Re-render component occure.
//In pour eg we are dealing with primitive types & props comparison, sending aa string which is of value "Julla".
//& in every 2 sec the  purecompo varify there is no difference between the prev & current val "Julla" & hence doesn't re-render.As reg comp doesn't impilement this  check the get re-rendered.
//if rendering a array of 50 items & don't want to re-render so this method help to work effeciently.
//----(SC USING STATE)----:
//parentcompo extend for purecompo instead os regcompo class.
//in console all are re-rendered but after few sec no rendering (check no difference btw prev & ccurrent state).
//if parent doesn't re-render the children also won't.so don't see  any render after.

//         SUMMARY   
//Create a component by extending the PureComponent class.
//A PureComponent implements the shouldComponentUpdate lifecycle  method by performing a shallow comparison on the props & state of the component.
//If there is no difference,the component is not re-rendered - performance boost.
//It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.
//Never mutate the state.Always return s new object the reflects the new state.Sholudn't mutate obj or array in props or state.eg: if wanted to add new item then don't mutate the array by pushing new item into it. reference to the array never changes because the pure component new check for that the components will never re-render even if there is a  difference.
//always return a new obj or array when dealing with pure components.


//what purecompo is for class based compo,memo is the same for function.



//VED 27 

import React , {Component} from 'react'
import Memocomponent from './MemoComponent'

class ParentComp extends Component {

constructor(props){           
    super(props)

    this.state = {
        name :"Julla"
    }
}

componentDidMount() 
{          //the setState re-render the parent compo in evey 2sec.                 
        setInterval(()=>     // since the "name" is not changing every 2 sec.we can gain performsnce by not re-rendering in every 2 sec.
    {
        this.setState({   
            name:'Julla'
        })

    },2000)
}
    render()
    { console.log('Parent Comp render')   //to know when the render method happen in all the 3 files render method is written.
                                         // reg & pure compnent passing name as a prop.
        return (
            <div>
                Parent Component
                <MemoComponent name = {this.state.name} />
            </div>
        )
    }
}
export default ParentComp

