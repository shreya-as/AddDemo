import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler()}></button>
        </div>
    )
}

export default ChildComponent
