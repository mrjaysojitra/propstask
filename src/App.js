// // import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react';

// // function App() {
// //   const [ count, setCount ] =useState(0);
// //   return (
// //     <div className="App">
// //       <p>Click Now {count}</p>
// //       <button onClick={() => setCount(count + 1)}>Click Me</button>
// //     </div>
    
// //   );
// // }

import React from "react";
import reviews from "./Data";
import "./index.css"
import { useState } from 'react';


export const Rcard = () => {
  const [ count, setCount] = useState(0);
  return (
    <article class="review">
      {reviews.filter((value, index, array)=> {
       return index==count
      }).map((value, index, array)=>{
        return (
          <div>
            <div class="img-container">
              <img src={value.img} id="person-img" alt="" />
            </div>
            <h4 id="author">{value.name}</h4>
            <p id="job">ux designer</p>
            <p id="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              asperiores debitis incidunt, eius earum ipsam cupiditate libero?
              Iste, doloremque nihil?
            </p>
          </div>
        );
      })}

      
       <div class="button-container">
            <button class="prev-btn" onclick={() => setCount(count + 1)}>
              {/* <i class="fas fa-chevron-left"></i> */}
              left
            </button>
            <button class="next-btn" onclick={() => setCount(count - 1)}>
              {/* <i class="fas fa-chevron-right"></i> */}
              right
            </button>
          </div>

      {/* <button class="random-btn">surprise me{count}</button> */}
    </article>
  );
};





