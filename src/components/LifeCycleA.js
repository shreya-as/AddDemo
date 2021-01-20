import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props){
super(props)
this.state ={
    name:'Shreya'
}
console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null 
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleA
