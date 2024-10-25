import React, {useState} from 'react'

const PrevCounter = ()=>{
    const [counter, setCounter] = useState(10)
    
    const inc = ()=>{
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        /*
            By using setCounter() method the value of counter is increasing only one time. To increase it multiple times we will follow inc2 function.
        */
    }

    const inc2 = ()=>{
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
    }

    return (
        <>
            <div>Counter = <button onClick={inc} className='border-[1px] border-black'>Inc</button> <button onClick={inc2} className='border-[1px] border-black'>Inc2</button> {counter}</div>
        </>
    )
}

export default PrevCounter