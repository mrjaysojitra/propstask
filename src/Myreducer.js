import React, { useReducer } from 'react'
import { useState } from 'react'

export const MYreducer = () => {

    const myreduce2 = (state,action) => {
        switch (action.type) {
            case 'add':
                
            return [...state, action.payload]

            case 'delete':
            const myd = [...state]
            myd.splice(action.payload,1)
            return myd
            

            default:
                
            return state;
        }
    }

    const [data, setdata] = useState('')
    const [myreduce, setmyreduce] = useReducer(myreduce2, [])

    const myHandler = (e) => {
        setdata(e.target.value)
      
    }

    const mySubmit = () => {
        setmyreduce({type: 'add' , payload: data})
       
        console.log(myreduce)
      
    }

    const  Mydelete = (e) => {
        setmyreduce({type: 'delete' , payload: e})
    }

  return (
    <div>
        <input type="text"  onChange={myHandler} />
        <input type="button" value="save" onClick={mySubmit}/>
        
        {myreduce.map((value, index)=> {
            return (

                <h5>{value}
                <input type="button" value="Delete" onClick=
                {()=>{Mydelete(index)}}/></h5>
            )
        })}
    </div>
  )
}
