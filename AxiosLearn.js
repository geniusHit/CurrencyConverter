import React, { useEffect, useState } from "react"
import axios from "axios"

const AxiosLearn=()=>{
    const [mydata, setData]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    }, [])

    return (
        <>
            <div>AxiosLearn</div>
            {mydata.map((d)=>{
                return (
                    <>
                        <div>Id:{d.id}</div>
                        <div>Name:{d.name}</div>
                        <div>Username:{d.username}</div>
                        <div>Email:{d.email}</div>
                        <div>Address:{d.address.street}, {d.address.city}</div>
                        <br></br>
                    </>
                )
            })}
        </>
    )
}

export default AxiosLearn