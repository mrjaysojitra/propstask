import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import './Card.css'
import MapData, { Cardscroll } from './MapData';
import { Rcard } from './Rcard';
import Practise from './Practise';
import { Menu } from './Menu';
import { Datafatch } from './Datafatch';
import { Efect } from './Efect';
import { Axio2, Axios } from './Axios';
import { Employe } from './Employe';
import { Secondf } from './Secondf';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locform } from './Locform';
import { Datausa, Datausa2, Datausa3, Datausa4, Datausa5, Datausa6 } from './Datausa';
import { Newform } from './Newform';
import { Form2, Form3 } from './Form2';
import { IAMJAY, IAMJAY2, IAMJAY3 } from './IAMJAY';
import { Looping } from './Looping';
import { NEWFOR } from './NEWFOR';
import { AG, AG2 } from './AG';
import Classc from './Classc';
import { Poseapi } from './Poseapi';
import { Login } from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Test } from './Test';
import { Displayimg } from './Displayimg';
import { Display } from './Display';
import { Task2 } from './Task2';
import { DATADI } from './DATADI';
import { Matirialuiform } from './Matirialuiform';
import { Myitemdeta } from './Myitemdeta';
import { USEMEMO } from './USEMEMO';
import {Provider} from 'react-redux';
import { Counter } from './Counter';
import store from './store/store';






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
     {/* <Efect  /> */}
     {/* <App /> */}
     {/* <Axios />
     <Axio2 /> */}
     {/* <Employe /> */}
     {/* <Secondf /> */}
     {/* <Locform /> */}
     {/* <Datausa /> */}
     {/* <Newform /> */}
     {/* <Datausa2 /> */}
     {/* <Datausa3 /> */}
     {/* <Datausa4 /> */}
     {/* <Datausa5 /> */}
     {/* <Datausa6 /> */}
     {/* <Form3/> */}
     {/* <IAMJAY /> */}
     {/* <IAMJAY2 /> */}
     {/* <IAMJAY3 /> */}
     {/* <Looping /> */}
     {/* <NEWFOR /> */}
     {/* <AG /> */}
     {/* <AG2/> */}
     {/* <Classc /> */}
     {/* <Poseapi/> */}
     <ToastContainer />
     {/* <Login/> */}
     {/* <Test/> */}
     {/* <Display /> */}
     {/* <DATADI /> */}
     {/* <Task2 /> */}
     {/* <Matirialuiform /> */}
     {/* <Myitemdeta />
     <USEMEMO text="my name is a jay sojitra. i am 20 year old. i am pursuing in bechalor of commerce. i am study in ms university. i am from rajkot" /> */}

     <Provider store={store}>
      <Counter/>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
