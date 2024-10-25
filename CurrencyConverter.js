import React, {useState, useEffect} from 'react'

const CurrencyConverter = ({curAPI})=>{
    const [select1, setSelect1]= useState('Afghan Afghani')
    const [select2, setSelect2]= useState('Afghan Afghani')
    const [valueInUS, setValueInUS] = useState(0.014)
    const [valueInUS2, setValueInUS2] = useState(0.014)
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(1)

    useEffect(()=>{
        console.log("value1 = " + value1)
        console.log("valueInUS = " + valueInUS)
        console.log("valueInUS2 = " + valueInUS2)
        setValue2((value1*valueInUS)/(valueInUS2))
    })

    return (
        <>
            <div className='bg-[#09ebe3] w-[400px] h-[250px] rounded-md m-[10px]'>
                <input type='number' min="0" className='border-[1px] border-gray-400 mt-[10px] ml-[10px]' onChange={(event)=>{
                    setValue1(event.target.value)
                    curAPI.map((cur)=>{
                        if(cur.currency==select1)
                            setValueInUS(cur.valueInUS)
                    })
                }}></input>
                <select className='ml-[30px] w-[150px]' onChange={(event)=>{
                    setSelect1(event.target.value)
                    setValueInUS(()=>{
                        curAPI.map((cur)=>{
                            if(cur.currency==event.target.value)
                                return cur.valueInUS
                        })
                    })
                }}>
                    {
                        curAPI.map((cur)=>{
                            return (
                                <option value={cur.currency}>{cur.currency}</option>
                            )
                        })
                    }
                </select>

                <br/>

                <input type='number' className='border-[1px] border-gray-400 mt-[10px] ml-[10px]' value={value2} readOnly></input>
                <select className='ml-[30px] w-[150px]' onInput={(event)=>{
                    setSelect2(event.target.value)
                    curAPI.map((cur)=>{
                        if(cur.currency==event.target.value)
                        {
                            setValueInUS2(cur.valueInUS)
                        }
                    })
                }}>
                    {
                        curAPI.map((cur)=>{
                            return (
                                <option value={cur.currency}>{cur.currency}</option>
                            )
                        })
                    }
                </select>
                <br/>
            </div>
        </>
    )
}

export default CurrencyConverter