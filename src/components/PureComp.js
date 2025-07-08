  //(VED 26)
//another way to create class by extending the pure component class from react  
//rpce - react snipet is used here.
//What is the differnce between pure compo & compo ,when can use one over the other ????
//for that compairing regular compo,purecompo,parentcompo.

  import React,{PureComponent}  from 'react';   //taking the pure component & exporting the same.

  class PureComp extends PureComponent {
    render(){          
      console.log('Pure Comp render')         //for JSX simply addimg the text "pure component".
        return(
            <div>
              Pure Component{this.props.name}    
            </div>
        )
    }
  }
  export default PureComp


  