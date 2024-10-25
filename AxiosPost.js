import React, {useState} from "react"
import axios from "axios"

const AxiosPost=()=>{
    const data={fname:"", lname:""}
    const [inputData, setInputData]=useState(data)
    const handleData=(e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    return (
        <>
            <label>First Name:</label>
            <input type="text" name="fname" className="border-[1px] border-black" value={inputData.fname} onChange={handleData}></input><br/><br/>

            <label>Last Name:</label>
            <input type="text" name="lname" className="border-[1px] border-black" value={inputData.lname} onChange={handleData}></input>
            <br/><br/>

            <button onClick={handleSubmit} className="bg-gray-500 p-[5px]">Submit</button>
        </>
    )
}

export default AxiosPost