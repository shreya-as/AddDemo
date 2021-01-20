
import React, { Component } from 'react'

 class EventBind extends Component {


     
         state = {
             message: 'Hello'
         }
    // this.clickHandler = this.clickHandler.bind(this)

     
    //  clickHandler = () => {
    //      this.setState({
    //          message:'GoodBye!'
    //      })
    //     console.log() 
    //  }
     componentDidMount(){
         
         this.setState({
             message:'GoodBye'
         })
     }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click This</button> */}
          {/* <button onClick={()=>this.clickHandler()}>Click This</button> */}
          {/* <button onClick={this.state.message}>Click This</button> */}


            </div>
        
        )
    }
}

export default EventBind
