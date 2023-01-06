import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './action/action';

export const Userthunkapi = () => {
    const data = useSelector(y =>y.user.data.data)

    const myDisa = useDispatch();
    console.log(data)
    
    useEffect(()=>{
        myDisa(getUserList())
        
    },[])
  return (
            <div>
            <table>
               {data?.map((element, index)=>{
                return(
                    <tr key={index}>
                        <td>{element.email}</td>
                    </tr>
                    )
                })}
            </table>    
            </div>

  )
}
