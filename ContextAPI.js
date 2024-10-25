import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext()
const data1 = createContext()
const ContextAPI = ()=>{
    const name = "Rohit"
    const age = "21"

    function recieve(data3){
        console.log(data3)
    }

    return (
        <>
            <data.Provider value={name}>
                <data1.Provider value={age}>
                    <ChildA getData={recieve}></ChildA>
                </data1.Provider>
            </data.Provider>
        </>
    )
}

export default ContextAPI
export {data, data1}