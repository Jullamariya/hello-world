//REACT FRAGMENTS (VED 25)


import React from 'react'

function Column(){ //the fragment can accept the key attribute when rendering the list items. so assume that we have an array of items.
    const items = [] //it's fn is written as a react fragment.
    return( //two columns added "td".
        <>
            {   items.map(item =>(
                 <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                 </React.Fragment>
                ))
            }
            <td> Name </td> 
            <td> Julla</td>
        </>       
    ) // React.fragment can also be written in an empty open&close tags(<> </>).
}//can't write key attributes in a (<> </>) tag.
export default Column 

//kjkkjhjkbnbhjhghjhhjhjh