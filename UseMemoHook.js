import React, {useState, useMemo} from "react"

const UseMemoHook = ()=>{
    const [add, setAdd]=useState(0)
    const [minus, setMinus]=useState(100)

    const multiply = useMemo(()=>{          // This function is calling also when the value of add is not changing, because by changing a prop in react the whole component is rerendered. So the function is calling again and again by clicking the add button and it is printing "***********************" multiple times. It decreases the performance of the page and user-experience.
        console.log("***********************")
        console.log("add = " + add)
        return add*10
    }, [add])
    
    return (
        <>
            <button onClick={()=>setAdd(add+1)} className="border-[1px] border-black bg-gray-300 p-[10px]">Add</button>{add}<br/><br/>
            <button onClick={()=>setMinus(minus-1)} className="border-[1px] border-black bg-gray-300 p-[10px]">Subtract</button>{minus}<br/><br/>
            {multiply}
        </>
    )
}

export default UseMemoHook