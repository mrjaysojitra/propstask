import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, stayvalue } from './reducer/Reducer';

export default function Counter3() {

    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counter)

    const [data, setdata] = useState(0)

    const myHandle = (e) => {
        setdata(e.target.value)
    }
  return (
    <div>
        <h1>Counter Redux</h1>

        <button onClick={()=> dispatch(increment())}>Increment</button>
        <h5>{counter.value}</h5>
        <button onClick={()=> dispatch(decrement())}>Decrement</button><br/>
        <button onClick={()=> dispatch(incrementByAmount(data))}>Decrement</button><br/>
        <input type='text' onChange={myHandle}></input>

       
    </div>
  )
}
