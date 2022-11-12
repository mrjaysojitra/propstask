import React from 'react'
import reviews from './Data'
import { useState } from 'react';

export default function MapData()
 {
  const [data,setdata]=useState('');

  const  myHandler = (e)=> {
    setdata(e.target.value)
  }


  return (
    <div>
    <input type="text" onChange={myHandler}/>
    <button type='submit' >Submit</button>

    {reviews.filter((value,index,array)=> {
      return value.name.indexOf(data) >= 0

    }).map((value,index,array) =>{
      return <div>{value.name}</div>
    
  })}</div>
  )
}



export const Cardscroll = () => {
  const [ count, setCount] = useState(1);

  return (
    <article class="review">
          <div class="img-container">
            {reviews.map((value,index,array)=>{
              return  <img src="value.img" id="person-img" alt="" />
            })}

          </div>
{/* 
          <h4 id="author">${reviews[index].name}</h4> */}
          <p id="job">ux designer</p>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            asperiores debitis incidunt, eius earum ipsam cupiditate libero?
            Iste, doloremque nihil?
          </p>
   
          <div class="button-container">
            <button class="prev-btn" onclick={() => setCount(count + 1)}>
              <i class="fas fa-chevron-left"></i>{count}
            </button>
            <button class="next-btn" onclick={() => setCount(count - 1)}>
              <i class="fas fa-chevron-right"></i>{count}
            </button>
          </div>
        
          <button class="random-btn">surprise me</button>
        </article>
  )
}

