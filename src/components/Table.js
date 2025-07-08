//REACT FRAGMENTS (VED 25) 
//to study more about fragments "column & table js " are created.

import React from 'react'

function Table(){
    return ( //replacing div tag using table tag.tags added to create a  Row of data.
       <table>
        <tbody>
          <tr>
           <Column/>
          </tr>
        </tbody>
       </table>
    )
}
export default Table