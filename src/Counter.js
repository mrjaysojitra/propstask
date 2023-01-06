import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Plus, Minus, asncMinus  } from './action/action';




export const Counter = () => {

    const data = useSelector(y=>y.counter)

    const mydis = useDispatch();

    const PlusData = () => {
        mydis(Plus())
    }

    const MinusData = () => {
        mydis(Minus())
    }

    const Minuscounterdata = () => {
      mydis(asncMinus(4))
    }

  return (
    <div>{data}
    <button onClick={PlusData}>Increment</button>

    <button onClick={MinusData}>Dicrement</button>

    <button onClick={Minuscounterdata}>asncMinus</button>
    </div>
  )
}

