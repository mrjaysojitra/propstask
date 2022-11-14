import React, { useEffect, useState } from 'react'


export const Datafatch = () => {
    const [data, setDeta] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(j =>j.json())
        .then(j=>{setDeta(j)})
    },[])
  return (
    <div>
    <table>
        {data.map((Element)=>{
            return(<tr>
            <td>{Element.albumId}</td>
            <td>{Element.id}</td>
            <td>{Element.title}</td>
            <td><img src={Element.url}></img></td>
            <td><img src={Element.thumbnailUrl}></img></td>
            </tr>)
        })}
    </table>    
    </div>
  )
}
