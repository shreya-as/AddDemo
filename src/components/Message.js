import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()  
        // we create the object of the state  
        this.state={
            message:'Welcome vistor'
        }

    }
    changeMessage(){
        this.setState({
            message:'than you for subscribing '
        })
    }
    render() {
        return  (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()  }>Subscribe</button>
        </div>
         
            )
    
        }
}
export default Message