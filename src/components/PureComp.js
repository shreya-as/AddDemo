import React, { PureComponent } from 'react'

 class PurecOMP extends PureComponent {
    render() {
        console.log('pure com render ')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PurecOMP
