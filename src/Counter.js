import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment,Dicrement } from './action/action'

export const Counter = () => {

    const data = useSelector(y=>y)

    const mydis = useDispatch();

    const Increment1 = () => {
        mydis(Increment())
    }

    const Dicrement2 = () => {
        mydis(Dicrement())
    }
  return (
    <div>{data}
    <button onClick={Increment1}>Increment</button>

    <button onClick={Dicrement2}>Dicrement</button>
    </div>
  )
}
