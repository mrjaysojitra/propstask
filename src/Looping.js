import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cardlayout from './Cardlayout'

export const Looping = () => {
    const [data, setdata] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(j => {setdata(j.data)})
    },[])
  return (
    <div className='row'>
        {data.map((value)=>{
            return (
                <Cardlayout second={value}></Cardlayout>
            )
        })}
    </div>
  )
}
