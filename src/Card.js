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
                <a className='button' href={props.link} target='blank'>Watch Now</a>
            </div>
        </div>    
     </div>
    </>
  );
}



export const Time = () => {
  return (
    <div></div>
  )
}
