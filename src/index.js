import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import './Card.css'
import MapData, { Cardscroll } from './MapData';
import { Rcard } from './Rcard';
import Practise from './Practise';
import { Menu } from './Menu';
import { Datafatch } from './Datafatch';
import { Efect } from './Efect';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <Card
    img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    title=' A Amzone Orignal Siaris'
    sname='Dark'
    link='https://www.primevideo.com/storefront/ref=atv_cat_sports?contentType=merch&merchId=Sports'
     />
    
     <Time /> */}
      {/* <MapData /> */}
    {/* <Rcard />  */}
    {/* <Practise /> */}
     {/* <Menu /> */}
     {/* <Datafatch /> */}
     <Efect  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
