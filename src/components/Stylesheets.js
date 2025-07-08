import React from 'react'
import './myStyles.css'

function Stylesheets(props){    //in "app.js" the primary is set into true/false.
                                 //declaring classname in let and props. ,given a contional op (?) 
    let className = props.primary ? 'primary' : '' // true set it - 'primary'  : if not - empty string. 
                                // can conditionaly add a "class" based on props & state of a component.
                                //"className" variable passed into classname attribute. 
                                //if want to specify multiple classes the simplest op is to use tempalte literals.
                                // "className" changed to template literals using backticks(``).
    return (
        <div> 
             <h1 className = {`${className} font-xl`}>Stylesheets</h1>   
        </div>
    )
}
export default Stylesheets
