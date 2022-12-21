import React, { useCallback } from 'react'
import { useState } from 'react'
import Myitems from './Myitems'

export const Myitemdeta = () => {
    
    const [data, setdata] = useState('')

    const [item, setitem] = useState([])

    const myhandlar = (e) => {
        setdata(e.target.value)
    }

    const mdata = () => {
        let kitem = [...item]
        kitem.push(data)
        setitem(kitem)
    }

    const remove = useCallback((index)=>{
        const dele = [...data]
        dele.splice(index)
        setdata(dele)
    },[item]) 

  return (
    <div>
        <input type='text' onChange={myhandlar}></input>

        <button onClick={mdata} type='submit'>Submit</button>

        <Myitems sdata={item} removedata={remove}/>
    </div>
  )
}
