import axios from 'axios'
import React, { useState } from 'react'
import { Displayimg } from './Displayimg'

export const Display = () => {
    const [data, setdata] = useState([])

    useState(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(y=>{setdata(y.data)})
    })

  return (
    <div>
      {data.map((value)=>{
        return(<Displayimg value ={value}></Displayimg>)
      })}
    </div>
  )
}
