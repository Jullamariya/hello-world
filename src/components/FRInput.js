//VED 3O 


 import React from 'react';

//  function FRInuput() {
//     return(
//          <div>
//          <input type="text" />
//          </div>
//     )
// }
 
// &&---- STEP 3 ----&&

const FRInput = React.forwardRef((props,ref) =>{ //react forward take a component as it's parameter. now the arrow fn is passed as a para to the forwardRef method. 
    //when a component is passed as a paramter to create ref method then it will recieve "ref" attribute as it's 2nd parameter.
    //so can recieve this "ref" parameter and pass this as a val to the "ref" in the native input. 
    //this ref para will point to the val ref attribute from the parent compo or the "ref" is forwarded from the parent element to the native input element.
 return (
     <div>
          <input type = "text" ref = {ref} />
     </div>
 )
})//mvbjlfkjghpo
export default FRInput
