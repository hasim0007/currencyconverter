import React, { useEffect, useState } from 'react'
import './currency.css'
export const Currency = () => {
    const [fromvalue, setfromvalue] = useState('INR')
    const [tovalue, settovalue] = useState('INR')
    const [input, setinput] = useState(1)
    const [convertvalue, setconvertvalue] = useState()
    const [resultvalue, setresultvalue] = useState(1)

    console.log(tovalue);
    
    async function wether() {
        let apiurl= await fetch(`https://api.exchangerate-api.com/v4/latest/${fromvalue}`);
        let convert=await apiurl.json();
        console.log(convert);
        setconvertvalue(convert.rates[tovalue]);
        
    }
    function converted(){
        let result = (input * convertvalue).toFixed(2);
        setresultvalue(result)    
    }
    useEffect(()=>{
        wether()
    },[fromvalue,tovalue])
  return (
    <>
        <div className="container">
            <h1>Currency Converter</h1>
            <div className="input_grp">
                <label htmlFor="">Amount:</label>
                <input type="text" className='input' onChange={(e)=>{
                   setinput(e.target.value) 
                }}/>
           </div>

           <select name="" id="" onChange={(e)=>{
            setfromvalue(e.target.value)
           }}>
            <option value="INR">India Rupee</option>
            <option value="USD">Uited State Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="JPY">Japan Pound Yen</option>
           </select>

           <select name="" id="" onChange={(e)=>{
            settovalue(e.target.value)
           }}>
           <option value="INR">India Rupee</option>
            <option value="USD">Uited State Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="JPY">Japan Pound Yen</option>
           </select>
           <div className="btn">
                <button onClick={()=>{
                    converted()
                }}>Convert</button>
           </div>
           <div className="result">
            <p>{input} {fromvalue} = {resultvalue} {tovalue}</p>
           </div>
        </div>
    </>
  )
}
