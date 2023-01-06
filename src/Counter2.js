import { useDispatch, useSelector } from "react-redux";
import { asyncMinus2, Minus2, Pluse2 } from "./action/action2";
import React from 'react'



export const counter2 = () => {

    const data = useSelector(y=>y.Counter)
  
    const myDiv = useDispatch();
  
    const PluseData2 = () => {
      myDiv(Pluse2())
    }
  
    const MinusData2 = () => {
      myDiv(Minus2())
    }
  
    const Minuscounterdata2 = () => {
      myDiv(asyncMinus2())
    }
  
    return (
      <div>{data}
      <button onClick={PluseData2}>Increment</button>
  
      <button onClick={MinusData2}>Dicrement</button>
  
      <button onClick={Minuscounterdata2}>asncMinus</button>
      </div>
    )
  }