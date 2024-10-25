import React, {useState, useRef, useCallback} from 'react'
import UseCallbackLearn from './UseCallbackLearn'
import { useNavigate } from 'react-router-dom'

const Counter = (name)=>{
    const [numVal, setNumVal]=useState(10)
    const num = useRef()
    const [count, setCount] = useState(30)

    const navigate = useNavigate()

    const decNum = ()=>{
        if(numVal>0)
            setNumVal(numVal-1)
    }

    const incNum = ()=>{
        setNumVal(numVal+1)
    }

    const Learning = useCallback(()=>{

    }, [count])

    const goToSignup = ()=>{
        navigate("/Signup", {state: {car:"tesla"}})
    }

    return (
        <>
            <button onClick={decNum} className='bg-gray-600 w-[30px] text-[20px] text-white'>-</button> <span ref={num} className='text-red-400'>{numVal}</span> <button onClick={incNum} className='bg-gray-600 w-[30px] text-[20px] text-white'>+</button><br/>
            {"Name = " + name.name + "\n Age = " + name.age}<br/><br/>
            <button className='bg-gray-600 w-[30px] text-[20px] text-white' onClick={()=>{
                setCount(prevCount=>prevCount+1)
            }}>Update count</button>
            <UseCallbackLearn Learning={Learning} count={count}></UseCallbackLearn>
            {/*
                By using Inc and Dec buttons the UseCallbackLearn component is rerendering automatically, but we don't need this. So to prevent it from rerendering we wrapped its export in memo hook.

                By passing a prop to the UseCallbackLearn component this component is again rerendering, because the compiler thinks that the function is changed on rerendering the page, so it rerenders the whole page and all components. To solve this we wrap the function in useCallback hook.

                The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

                useCallback is used when we have to call a function only when its body is changed, otherwise the function is not called.
            */}
            <br/>
            <button onClick={goToSignup}>Signup</button>
        </>
    )
}

export default Counter