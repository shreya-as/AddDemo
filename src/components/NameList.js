import React from 'react'
import Person from './Person'
function NameList() {
 const names= ['Tomato','brinjal','potato']
   const persons=[
       {
           id:1,
           name: 'shreya',
           age:28,
       },
       {
        id:2,
        name:'Nimesh',
        age:21,
    },
    {
        id:3,
        name:'Astu',
        age:22,
    }
   ]
    // const personList = persons.map(person => (
    //     <Person key={person.age } person={person}></Person>
    // )) this is the ey prop
        const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
    return <div>{nameList}
</div>
      
}
 
export default NameList
