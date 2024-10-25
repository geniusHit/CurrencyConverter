import React from "react"

const MapMethod=()=>{
    const ipl=["CSK", "MI", "RCB", "CSK", "MI"]
    return (
        <>
            {ipl.map((team, index)=><h1 key={index}>{team}, {index}</h1>)}
            {/*
                The above code is showing the following warning:
                react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

                key={team} is used to remove the above error and to access only the values which are unique.
                The key should be always unique so we use index as the key.
                When we have multiple keys with same name then we can use the key attribute and provide the index in this to make react understand that each key is unique by index and it will render only those elements which have the changes but not change all the objects which have same key.
            */}
        </>
    )
}

export default MapMethod