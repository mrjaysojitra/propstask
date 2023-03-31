import React, { Suspense,lazy } from 'react';
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
// import store from './store/store';
import { AGGRID, Test3, Test4 } from './Test3';

import  Global  from './axios/Global';
import { Video } from './Video';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import { Contact } from './Contact';
import { Blogs } from './Blogs';

import { Arror } from './Arror';
import { Footer } from './Footer';
import { Usestate1 } from './Usestate1';
import { MYreducer, Myreducer } from './Myreducer';
import { User } from './User';
import { Html } from './Html';
import { Css } from './Css';

import { Logint } from './Login/Logint';
import Require from './Login/Require';
import { Sigup } from './Login/Sigup';
import { Upload } from './Upload';
import { Inquiry } from './Inquiry';
import {ErrorBoundary} from 'react-error-boundary'
import BuggyCounter from './BuggyCounter';
import { Customstate } from './Customstate';
import { Apicustom } from './Apicustom';
import { Errorf } from './Errorf';
import { Nav } from './Nav';
import MyHoc from './Hoc'; 
import store from './store/store';
import { Userthunkapi } from './Userthunkapi';
import { CounterSaga } from './CounterSaga';
import { MYpost } from './MYpost';
import Counter3 from './Counter3';
import Store2 from './store/Store2';
import { Post } from './post/Post';
import { Post2 } from './post/Post2';
import Classcom from './Class/Classcom';
import Myform from './Class/Myform';
import { Formadd } from './lavel 3/Formadd';
import { Form2lave3 } from './lavel 3/Form2lave3';
import { Apidata } from './lavel 3/Apidata';
import Myitems from './Myitems';






const root = ReactDOM.createRoot(document.getElementById('root'));

// let HomeHoc1 = MyHoc(HomeLazy1);
// const HomeLazy1 =React.lazy(()=> import('./TestRavi'))



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
     {/* <ToastContainer />
     <Login/> */}
     {/* <Test/> */}
     {/* <Display /> */}
     {/* <DATADI /> */}
     {/* <Task2 /> */}
     {/* <Test3 />
     <Test4 />
     <AGGRID /> */}
     {/* <Matirialuiform /> */}
     <Myitemdeta />
     
     {/* <USEMEMO text="my name is a jay sojitra. i am 20 year old. i am pursuing in bechalor of commerce. i am study in ms university. i am from rajkot" /> */}

     <Provider store={Store2} >
      {/* <Post /> */}
      {/* <Post2 /> */}
     {/* <Counter3 /> */}
     {/* <MYpost /> */}
      {/* <Counter/> */}
      {/* <Userthunkapi /> */}
      {/* <CounterSaga /> */}
     </Provider>
     
     {/* <Video /> */}

     {/* <BrowserRouter> 
    <Suspense fallback={<div>Loading.....</div>}>
    <Header />
      <Routes>
      
          <Route path="/" element={<HomeLazy1 />} />
          <Route path="/Locform" element={<Locform />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="User" element={<User/>}>
            <Route path="Html" element={<Html/>}/>
            <Route path="Css" element={<Css/>}/>
        
          </Route> 
         
          <Route path="*" element={<Arror />} />
      </Routes>
      </Suspense>
    </BrowserRouter> */}

    {/* <Upload /> */}
    {/* <Usestate1 /> */}
    {/* <MYreducer /> */}

    {/* <Inquiry /> */}

   
{/*       
    <ErrorBoundary
    FallbackComponent={Errorf}
   
  >
  <Nav />
      <BuggyCounter/>
      </ErrorBoundary> */}
    
    
  {/* <CollapsibleExample />  
   <Apicustom /> */}
  
   {/* <Classcom /> */}
   {/* <Myform /> */}
    {/* <Formadd />  */}
    {/* <Form2lave3 /> */}
    {/* <App /> */}

    {/* <Sigup /> */}
    
  
    {/* <Apidata /> */}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
