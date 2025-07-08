import React from 'react'

//in react inline styles are not specified as a 'string',specified with an obj whose key is a camelcased version of style name & value is usually a string.
//to apply the style use the 'style attribute' in 'h1' (style = {heading})
const heading = {
fontSize : '100px',
color:'blue'
}

function Inline(){
    return (
        <div>
         <h1 className = 'error'>Error</h1>
         {/* <h1 className = {styles.success}> Success</h1> */}
         <h1 stlye = {heading} > Inline </h1> 
        </div>
    )
}
export default Inline 

//CSS MODULE 
//it is available on reaction 2 or higher.
// a file naming convension for css mosdules  "with creat-react app"  file name sufix  -.module.css
//eg: creating 2 style sheets in src folder : appStyle.css,appStyle.module.css.

//there is difference in importing files to "app.js".
//also difference in style import from 2 files.

