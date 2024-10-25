import React, { useState } from "react"

const UseStateWithArray=()=>{
    const [persons, setPersons]=useState([{id:1, name:"Arun", age:"18"}, {id:2, name:"Karan", age:"16"}])
    const change2=()=>{
        setPersons([...persons, {...persons, id:1, name:"Pankaj", age:"28"}])
    }

    return (
        <>
            <ol>
                {
                    persons.map((p)=>{
                        return (
                            <li key={p.id}>Id:{p.id} Name:{p.name} Age:{p.age}</li>
                        )
                    })
                }
            </ol>
            <button onClick={change2}>Change2</button>
        </>
    )
}

export default UseStateWithArray