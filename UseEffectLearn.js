import React, {useState, useEffect, useRef} from 'react'

const UseEffectLearn = ()=>{
    const th = useRef()
    const [num, setNum] = useState(10)
    useEffect(()=>{
        if(num==1)
            th.current.innerHTML="<sup>st</sup>"
        if(num==2)
            th.current.innerHTML="<sup>nd</sup>"
        if(num==3)
            th.current.innerHTML="<sup>rd</sup>"
        if(num>3 && num<=20)
            th.current.innerHTML="<sup>th</sup>"
    })

    return (
        <>
            <div className='mt-[20px]'>
                <button className='bg-gray-400 text-white p-[8px] mr-[10px]' onClick={()=>{
                    if(num>1)
                        setNum(prevNum=>prevNum-1)
                }}>Dec</button>
                The number is : {num} <span ref={th}></span>
                <button className='bg-gray-400 text-white p-[8px] ml-[10px]' onClick={()=>{
                    if(num<20)
                        setNum(prevNum=>prevNum+1)
                }}>Inc</button>
            </div>
        </>
    )
}

export default UseEffectLearn