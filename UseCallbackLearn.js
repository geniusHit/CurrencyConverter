import React, {memo} from 'react'

const UseCallbackLearn = ({Learning, count})=>{
    console.log("Child component rendered")
    console.log("Count = " + count)
    return (
        <>
            
        </>
    )
}

export default memo(UseCallbackLearn)

// Imported in Counter.js