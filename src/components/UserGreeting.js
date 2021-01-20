import React, { Component } from 'react'

export class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Shreya </div>

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Shreya  </div>
        // ): ( 
        //     <div>Welcomem Guest</div>
        // )
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welocome Shreya</div>
        //     ) 
        // }else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //          <div>Welcome Shreya</div>
        //          <div>Welcome Guest</div>
        //     </div>

             // )
    }
} 

export default UserGreeting
