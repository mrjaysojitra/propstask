import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const MYpost = () => {


    const myj = useDispatch()

    useEffect(()=>{
        myj({
            type: 'FETCH_POSTS_REQUEST'
        })
    },[])

    const mydata = useSelector(y=>y.posts.data.data)

    console.log(mydata)
  return (
    <div>{mydata?.map((element,index)=> {
        return(
            <div key={index}>
            <h5>${element.id}</h5>
            <h5>${element.first_name}</h5>
            </div>
        )
    })}</div>
  )
}
