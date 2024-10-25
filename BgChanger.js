import React from 'react'

const BgChanger = ()=>{
    return (
        <>
            <h2 className='mt-[20px]'>Background Colors:</h2>
            <div className='mt-[5px] flex justify-center'>
                <button className='bg-red-600 p-[8px] inline-block text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:red;"
                }}>Red</button>
                <button className='bg-yellow-500 p-[8px] inline-block ml-[10px] text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:yellow;";
                }}>Yellow</button>
                <button className='bg-blue-600 p-[8px] inline-block ml-[10px] text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:blue;";
                }}>Blue</button>
                <button className='bg-green-600 p-[8px] inline-block ml-[10px] text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:green;";
                }}>Green</button>
                <button className='bg-purple-600 p-[8px] inline-block ml-[10px] text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:purple;";
                }}>Purple</button>
                <button className='bg-black p-[8px] inline-block ml-[10px] text-white rounded-md' onClick={()=>{
                    document.body.style = "background-color:black;";
                }}>Black</button>
                <button className='bg-white p-[8px] inline-block ml-[10px] text-black border-[1px] border-black rounded-md' onClick={()=>{
                    document.body.style = "background-color:white;";
                }}>White</button>
            </div>
        </>
    )
}

export default BgChanger