import React, { useEffect, useState } from 'react'

export const Customstate = (url) => {

    const [loading, setloading] = useState(true)

    const [data, setdata] = useState([])

    const getData = async () => {
        const respons = await fetch(url)
        const mydata = await respons.json();

        setdata(mydata);
        setloading(false)
    }

    useEffect(()=> {
        getData();
    },[url])

    
  return (
    {loading,data}
  )
}
