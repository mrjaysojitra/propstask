import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { STOR } from './STOR'

export const DATADI = () => {
    const [data, setdata] = useState([])
    const [index, setindex] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(y=>{setdata(y.data)})
    })

    const myDelete = () => {
      let axr = [...data]
      axr.splice(index,1)

      setdata(axr)
    }

  return (
    <div>
        {data.map((e)=>{
            return(<STOR mystor={e} delete={myDelete} ></STOR>)
        })}
    </div>
  )
}
