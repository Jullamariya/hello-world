//when build web application the common scenario is to display a list of items (eg: list of names,products,courses & so on)
//so we want to repeat some html according to the list.
//it realise heavily on the JS language ietself & not introduduce new methods to manipulate & render data.
// .map() method to itrate or an array and quickly return the desired changes applied.

// import React, {Component} from 'react'
// function NameList(){
//     const names = ['Bruce','Clark','Diana']
   
      //displaying each name using array index.
    //  return (
    //      <div>
    //          <h2>{names[0]}</h2>  
    //         <h2>{names[1]}</h2>
    //          <h2>{namhhtfyuoes[2]}</h2>
    //     </div>
    // )

//               ***************************

//Using the .map() method to render the names.
//instead ohf the 'h2' elements begin it with curly braces.

//  const nameList = names.map(name => <h2>{name}</h2> )    // for every name return an h2 tag with the name as an inner html.//to keep the written statement simple move the list rendering logic out.
//                                                         //declaired new const & assigned the result of the map op. 
// return 
//     <div> {nameList} </div>                            //even though have outer curly braces  do also need curly braces for the name.
// }
// export default NameList  
 

//What if you have an obj with a few properties
//refactor thee JSX into a separate component then use the component in map method JSX.
//THIS IS A COMMMON METHOD USED TO RENDER A LIST. 
// import React from 'react'
// import Person from './Person'                        //it is really impotrant to remember to import child js to the parent.
// function NameList(){                                 //simply render each person in the map method with additional html.
//     const persons = [                                //for each person we need to render the name,age & skill. 
//         {
//             id:1,
//             name:'Bruce',
//             age:30,
//             skill:'React'
//         },
//         {
//             id:2,
//             name:'Clark',
//             age:25,
//             skill:'Angular'
//         },
//         {
//             id:3,
//             name:'Diana',
//             age:28,
//             skill:'Vue'
//         }
//     ]
//     const personList = persons.map(person => < Person key = {person.id} person = {person}/>)
//     return <div>{personList}</div>  
// }                                            //to get the access to the data of the person pass person as a prop into this js file.
//                                             //passing 'person' as a prop to the 'person component'
// export default NameList


//list component is only responsible for rendering list, person component only responsible for rendering person.


//**** LISTS & KEYS IN REACT ***** 
//KEY : is the special string attribute which need to include while creating lists of elements.
// key give element a stable identity.

//'KEY PROP' is a special attribute need to add while creating a list of elements.
//In the above method the console shows a warning "each child in an array or iterator sholud have unique 'key' prop" or each item rendered using map should have a prop called "key".
//and value to the prop should be unique.
//in the above map method key prop is added.
//to the added key need to add the val which is unique with in the list.
// now every person will have an ID propety with val "unique" within the list.
//so change the ID property into {person.id}.this can be anything unique from the list eg: {person.name} - all the names are unique.
//'key props' are not accessable in the child component need to usee a differrent key for the child it is reserved.

//WHY DO WE NEED KEY PROPS????
//keys help react to identify which items are changed,removed,added and plays a crucial role in UI update efficiently.
//keey prop is to render the list efficiently.

//HOW??
                //EXAMPLE (I)
// :a) <ul>                          b)<ul>
// <li> BRUCE <li/>                         <li> BRUCE <li/>
// <li> CLARK <li/>                         <li> CLARK <li/>
// <ul/>                                    <li> DIANA <li/>    
//                                      <ul/>


//  consider a list of items two items to begin with 'Bruce'&'Clark' & need to add 'Diana' ,how react respond?
//react itrate over both list  at same time and generate a mutation when ever there is a difference.
//react match the first items in each list sees there is no difference & for the third item it sees a differece & simply inserts the item into the DOM tree & building the new tree from the scratch.
//react simple update the tree by inserting the item at the end of the list nothig else has to change.

//now consider a) & need to add new item to the list & need to insert it at the begining.

                   //EXAMPLE (II)
//b)<ul>
//      <li key="3"> DIANA <li/> 
//      <li key= "1"> BRUCE <li/>
//      <li key="2">  CLARK <li/>
//  <ul/>

//when react itrate both the list and make a comparison & finds every item is different. 
//mutate every child without realising it can keep others('BRUCE'& 'CLARK') as subtree intact this inefficeincy can be a pblm.
//tp solve this issue react support the 'key attribute'.

// children have "key" then react use it to match the children with original tree with the children in subsequent tree.
//now react understand the "key3" is a new one & "1"& "2" just moved.so react will preserve the the subtree & simply insert the new item at the top & it is much more efficient.



//*****How to use index as a key & for rendering & what happens when it is used in a wrong senario????******


 import React from 'react'
import Person from './Person'              
function NameList(){ 
    const names = ['Bruce','Clark','Diana','Bruce']   //in the namelist component adding an array                                 
    const persons = [                         //what if duplicaution of name is added.the key prop will not be unique.         
        {                                     
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        }
    ]                                                                   //here name is the unique id.now key will not be unique due to duplication of name,so we use 'name'&'index'(use paranthesis),key = index
    const nameList = names.map((name,index) => <h2 key = {index}>{index} {name}</h2>)   //rendering the list of names instead of the persons array.
                                                                      //within the fn body return an h2 tag with the name of an innertext.
 return <div>{nameList}</div>                                        //return namelist instead of personlist
}                                                                    
export default NameList


//(NOTEBOOK VEDIO -19 REACT)
//initialy we have three items with insdex as "key".when insert a new item at the beginning.
// <ul> <li key="0"> 1 </li>       <ul> <li key="0"> 1 </li>             
//      <li key="1"> 2 </li>            <li key="1"> 2 </li>
//      <li key="2"> 3 </li> </ul>      <li key="2"> 3 </li>
//                                      <li key="3">  </li>  </ul>
//and when the val insert at the beginning react will place the val with an index "3" & perivious vals  will be reused & and the val in index will be placed back.
//eventhough vals are added at the top thet appear to be added at the bottom.

// if added to items at the bottom:
//"sort by earlist" the time stamp - ascending order."sort by latest" - time stamp in descending order. but item val will not change. this is because using index as the "key". 
//                    *****(NOTEBOOK)*****

//most of the time a unique id will satisfy the condition.

//CAN USE KEY = INDEX (for certain conditions)

// * item in the list don't have a "unique id".-have unique id then use it.
// * list is a static list will not change.- never adding or removing items to off from the list respectively.
// * this list will never be reordered or filtered - sorting baseed on aa column val or filter based on user input.

//STYLING REACT COMPONENTS : there are a couple options to style a react component 
// 1) CSS stlyesheets : 
// 2) Inline styling.
// 3) CSS Modules.
// 4) CSS in JS Libraries ( good to use 'Style Components' for projects).
