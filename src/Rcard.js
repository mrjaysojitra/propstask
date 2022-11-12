import React from "react"
import reviews from "./Data"
import { useState } from "react";


export const Rcard = () => {
  const [num, setNum] = useState(1); 
  return (
    <article class="review">
          <div class="img-container">
            <img src={reviews[num].img} id="person-img" alt="" />
          </div>
          <h4 id="author">{reviews[num].name}</h4>
          <p id="job">{reviews[num].job}</p>
          <p id="info">{reviews[num].text}</p>
          
          <div class="button-container">
            <button class="prev-btn" onClick={() => { setNum (num+1);}}>
              <i class="fa fa-chevron-left"></i>
            </button>
            <button class="next-btn" onClick={() => {setNum (num-1);}}>
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
         
          <button class="random-btn">surprise me</button>
        </article>
  )
}
