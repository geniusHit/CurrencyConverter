import React, {useState} from 'react'

const RegistrationForm = ()=>{
    const data={name:"", email:"", password:""}
    const [inputData, setInputData]=useState(data)
    const handleData=(e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    const validation=()=>{
        if(!inputData.name || !inputData.email || !inputData.password)
            alert("All fields are mandatory!")
        else
            alert("Hello " + inputData.name + " Registration Successful!")
    }

    return (
        <>
            <form>
                <h1>Registration Form</h1>
                <input type='text' placeholder='Name' name='name' className='border-[1px] border-black' value={inputData.name} onChange={handleData}></input><br/>
                <input type='email' name='email' placeholder='Email' value={inputData.email} className='border-[1px] border-black mt-[10px]' onChange={handleData}></input><br/>
                <input type='password' name='password' placeholder='Password' className='border-[1px] border-black mt-[10px]' value={inputData.password} onChange={handleData}></input><br/>
                <input type='submit' className='border-[1px] border-black mt-[10px]' onClick={validation}></input><br/>
            </form>
        </>
    )
}

export default RegistrationForm