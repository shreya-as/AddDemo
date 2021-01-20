import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
 class ParentComp extends Component {
    state={
        name:'Shreya'
    }

    componentDidMount(){
        setInterval(()=>{
           this.setState ({
               name:'sh '
           })
        },2000)
    }
    render() {
        console.log('this is the parentcomponent')
        return (
            <div>
                Parent 
    {/* <RegComp name={this.state.name}/>
    <PureComp name={this.state.name}/> */}
    <MemoComp name={this.state.name}/> 
            </div>
        )
    }
}

export default ParentComp
