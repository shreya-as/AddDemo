import React from 'react'

function MemoComp({name}) {
    console.log('rendering memo Comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
