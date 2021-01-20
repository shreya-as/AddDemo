import React from 'react'

//  function Greet() {
//     return <h1> Hello This i a simple test  </h1>
// }
//components are reuasble and we need to reuse the greet 
//all you have to do is to rewrite the greet in a component 
export const Greet =props=>
 {
     const {name, heroName} = props
     console.log(props)
     //we cannot assign the value direcy
    return (
        <div><h1> Hello  {name} a. {heroName}</h1>
        {props.children}</div>

    ) 
}
 export default Greet