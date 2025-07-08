//what happends when compo "A" hve a child "B"???/
             //(VED 23)

// import React,{Component}from 'react'
// class LifecycleB extends Component {
//   constructor(props){           //------(1)
//    super(props);
//    this.state={
//     name:'Julla',
//    }
//    console.log('LifecycleB constructor');
//   }

//    static getDerivedStateFromProps(props, state) {      //----(2)
//     console.log('LifecycleB getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount(){                         //----(4)
//     console.log('LifecycleB componentDidMount')
//   }

//   render(){                         //-----(3)
//     console.log('LifecycleB render')
//         return(<div>
//                <div> Lifecycle B </div>
//                </div>
//        )
//   }
// }
// export default LifecycleB

//UPDATING LIFECYCLE METHODS : these are called when  a component is re-rendered of changes either in props or state.
// totally have 5 methods- in that 3 will fall into catogary of rarely used methods.

//&&---METHOD I : static getDerivedStateFromProps(props,state)---&&
//this method is most rarely used method in updating phase.
// this is a static methos recieve props & state as it's parameter & return null or an obj that represents the updated state of the component.Method is called every time a component is re-endered.
// used when state depends on the props of the component. Set the state.
//Do not cause side effects.Ex:HTTP requests.

// &&---METHOD II : shouldComponentUpdate(nextProps,nextState)---&&
//method recieves updated props & state.
//purpose is to Dictates if the component should re-rendered or not.
//by default all class component will re-rendered when their props recieved ot their state re-rendered.
//this method can prevent the default behaviour by returing "false".
//can compair the exsisitng props & state vals with the next & return true or false to let the react know whether the component should be updated or not.
//so this method is basically for performance optimisation 
//performance the optimization.
// Do not cause side effects.Ex:HTTP requests Calling the setState method.
//again is classified as a rarely used lifecyclee method in the official react documentation.

//&&---METHOD III : render()---&&
//Only required method.
//Read .props & .state & return JSX which describes the UI.  
//Do not change state or interact with DOM or make ajax calls.

//&&---METHOD IV : getSnapshotBeforeUpdate(pervProps,prevState)p---&&
//accepts previous props & states as its para & called right before the changes from the virtual DOM are to be reflected in the DOM.
//This is again a method react documentation classifys as a rarely used method.
// use this to capture some information from DOM.eg: can read users scroll position & after some update maintain that scroll position by performing some calculations.
//this method either return null or a val,the val is passed as third parameter to the next method.

//&&---METHOD V : componentDidUpdate(prevProps,prevState,snapshot)---&&
//called after the render id finished in the re-render cycles.this means can be sure that the components & all it's sub components have properly rendered itself after the update.
//this method have 3 parameters: prevProps,prevState,snapshot (snapshot val get returned from the from getSnapshotBeforeUpdate method).
//this method is quarented to be called only once in each re-render cycle.
// so what can do is to cause side effects.can make ajax calls but before making the calls need to compaire  perProps with new props & then decide to decide whether to make the ajax calls or not.
//if not compairing then it will be an unwanted idea.
//so component did update called once after the component has re-rendered & suitablr to make ajax calls bassed on prev & current props value.


// using UPDATING LIFECYCLE METHODS

import React,{Component}from 'react'
class LifecycleB extends Component {
  constructor(props){           //------(1)
   super(props);
   this.state={
    name:'Julla',
   }
   console.log('LifecycleB constructor');
  }

   static getDerivedStateFromProps(props, state) {      
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount(){                         
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getSnapshotBefore')
    return null
  }

componentDidUpdate(){
  console.log('LifecycleB componentDidUpdate')
}

  render(){                         
    console.log('LifecycleB render')
        return(<div>
               <div> Lifecycle B </div>
               </div>
       )
  }
}
export default LifecycleB

//&&----UNMOIUNTING PHASE METHOD----&& (only one method)

//METHOD I : componentWillUnmount()
//Method is invoked immediately before a component is unmounted & destroyed.
//can perform some clean-up task like cancelling any network requests,removing event handlers,cancelling any subscriptions & also invalidating timers.
//don't call the setState method. because the component never be re-rendered after unmounted.

//ERROR HANDLING PHASE METHODS -2 methods
//both method called when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.
//1)static getDErivedStateFromError(error)
//2)componentDidCatch(error,info)