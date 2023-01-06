import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CounterSaga = () => {

    const count = useSelector(y => y.counter)

    const jiv = useDispatch();

    const Increment = () => {

        jiv({type: 'INCREMENT'})
    }

    const Dicriment = () => {
        jiv({type: 'DICRIMENTM'})
    }

    const Multiment = () => {
        jiv({type: 'MULTIMENT'})
    }

    const Division = () => {
        jiv({type: 'DIVISION'})
    }
  return (
    <div>
    {count}
    <button onClick={Increment}>Increment</button>

    <button onClick={Dicriment}>Dicriment</button>

    <button onClick={Multiment}>Multi</button>

    <button onClick={Division}>Division</button>
    </div>
  )
}
