import React, { useState } from "react"

const UseStateWithObject=()=>{
    const [name, setName]=useState({firstName:"Rohit", lastName:"Thakur"})
    const change=()=>{
        setName({...name, firstName:"Ravi"})    //...name is a rest operator and is used to convey that we only want to change the given value and the rest values should be same as before.
    }

    return (
        <>
            <div>My firstname is {name.firstName} and lastname is {name.lastName}</div>
            <button onClick={change}>Change</button>
        </>
    )
}

export default UseStateWithObject