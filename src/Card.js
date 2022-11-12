import React from 'react';



export default function Card(props) {
    console.log(props)
  return (
    <>
     <div className='cards'>
        <div className='card'>
          <img src={props.img} className='img'  />
            <div className='cardbody'>
                <span className='card_category'>{props.title}</span>
                <h3 className='cardtitle'>{props.sname}</h3>
                <a href={props.link} target='blank'>Watch Now</a>
                <button> Watch Now</button>
            </div>
        </div>    
     </div>
    </>
  );
}