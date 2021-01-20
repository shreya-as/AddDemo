import React, { Component } from 'react'

export class AddDemo extends Component {
    state={
        nameList:[],
       currentItem:{
            text:'',

       }
        
    }
    handleName=(e)=>{
        
        this.setState({
        currentItem:{text:e.target.value}, 
        })
      
    }
   
    addItem=(e)=>{
        e.preventDefault() 

        this.setState({ 
            nameList:[this.state.currentItem.text],
            currentItem:{text:""}
          }); 
    }

    render() {
        

        return (
            <div>
                <header>
                    <form id="form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter Name" value={this.state.currentItem.text} onChange={this.handleName}/>
                        <button type="submit">Add</button>
                        
                    </form>
                </header>
                          
{this.state.nameList.map((name,index)=>{
    return <h1 key={index}>{name} </h1>
})}
            </div>
        )
    }
}

export default AddDemo
