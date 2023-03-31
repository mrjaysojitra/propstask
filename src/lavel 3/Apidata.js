import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Apidata = () => {
    const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(y => setdata(y.data))
  },[])
  return (
    <div>

     <table>
        {data.map((element)=>{
            return(
                <tr>
                    <td>{element.title}</td>
                </tr>
            )
        })}
     </table>
    </div>
  )
}
