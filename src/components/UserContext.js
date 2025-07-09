
//                                                      VED 39
//STEP1:
//creating a user context using create context method form react.
//make sure to export the provider & consumer compo as well.

// import React from 'react'

// const UserContext = React.createContext()

// //it happens that every "context obj" create a context method comes with a provider & a consumer react component.

// const UserProvider = UserContext.Provider  //this both need to be get exported so use a convinient name.
//                                           //Provider should provied val for every descendent compo.here the val we want is "username". 
//                                           //STEP2:At the top level include the provider compo & provide a val using the val attribute in the "App name",tthis val can be consumed by any of the descendent compo. 
// const UserConsumer = UserContext.Consumer

// export {UserProvider,UserConsumer}

//for step2 need to provide this usercontext using the userprovided component.
//the place provide is important  only the descendent compo should provide it.
//in "APP COMPO" the component C is wrapped using userProvider.
//in the val attribute in the userprovider we provide a val that can be consumed by the component "c" & any compo nested inside.

//STEP3: In the compo where the "username" is required use the "consumer compo" & pass in the  fn as it's child, the fn recieve the context val as it's para which can theen be used to return the JSX.
//you can choose to just display it & use it ffo some rendering logic.(this is how react context is used)
// Consuming the username in the decide compo 
//for our demo we need to consume the username val in  "componentF".
//to consume a context val we need to consume a compo.(render method of compo "F")
 

//VED 40

//POINT 1 : SETTING A DEFAULT VAL IN REACT CONTEXT:
//can set a default val to thr context & that val is set while creating the context. it is passed as an arg in create context method 'Codevolution' - default val.
// in app compo the userprovider is commanded out. the displayed text will be "hello codevolution"
//the default val is only added when  a compo don't have a matching provider above it in the compo tree.

//POINT 2: THE CONTEXT TYPE PROP:
//there is an another way to consume the context val & that is using "context type property on the class".
//using the usercontext val in componentE 
//STEP1(to use usercontext val): Export the user context val. 

import React from 'react'

const UserContext = React.createContext ('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export{UserProvider,UserConsumer}
export default UserContext 

//STEP 2 : assign this userContext to the context type prop on the class
//so in compo E .js  outside the code for class compo E we have "ComponentE.contextType = UserContext"

