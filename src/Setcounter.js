import React from 'react'
import { useState, useEffect  } from 'react'

export const Setcounter = (props) => {
    const [item, setitem] = useState("5")
  
    useEffect(()=> {
      fetch("https://fakestoreapi.com/products?limit=" + props.item)
      .then(y => y.json())
      .then(y => {
        setitem(y)
        console.log(y)})
    },[props.item])
  

  return (
    <div>
    
    </div>
  )
}
