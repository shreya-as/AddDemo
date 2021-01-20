import React, { Component} from 'react'

class ClassClick extends Component{
    clickHandler(){
        console.log('çliced the buttonn')
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Clickme </button>
                
                 </div>
        )
    }
}
export default ClassClick