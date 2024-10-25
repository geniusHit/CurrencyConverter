import React, { useContext, useRef } from "react";
import {data, data1} from "./ContextAPI";

const ChildA = (props)=>{
    const age=useContext(data1)     // useContext API is used to access a context API from another page.
    const text=useRef()
    function handleSubmit(e){
        e.preventDefault()
        props.getData(text.current.value)
    }
    return (
        <>
            <data.Consumer>
                {
                    (name)=>{
                        return (
                            <>
                                <h1>ContextAPI is giving data {name}</h1>
                                <data1.Consumer>
                                    {
                                        (age)=>{
                                            return (
                                                <h1>{name}'s age is {age}</h1>
                                            )
                                        }
                                    }
                                </data1.Consumer>
                            </>
                        )
                    }
                }
            </data.Consumer>

            <div>My age is {age}</div>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={text} className="border-[1px] border-black"></input><br/>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default ChildA