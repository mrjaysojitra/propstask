import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts2 } from './postSlice2';

export const Post2 = () => {
    const data = useSelector(status => status.Post2);
    const dispatch = useDispatch();

  
    useEffect(()=> {
        dispatch(getPosts2())
    },[])

  return (
    <div>
        <table>
         {data?.list?.map((item, index)=>{
                return(
                    <tr key={index}>
                        <td>{item.description}</td>
                    </tr>
                )
            })}
        </table>    
    </div>
  )
}
