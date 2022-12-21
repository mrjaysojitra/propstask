import React, { Children, useEffect, useState } from "react";
import { Child1 } from "./Child1";
import Header from "./Header";
import { Header2 } from "./Header2";
import UserLanguage from "./CreatLanguage";
import { useRoutes } from "react-router-dom";
import { User } from "./User";
import { Html } from "./Html";
import { Css } from "./Css";
import { Home } from "./Home";



export const App = () => {
  // const [data, setDeta] = useState([]);
  // const [top, setTop] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((j) => j.json())
  //     .then((j) => setDeta(j));
  // }, []);

  // const myHandler = (e) => {
  //   setTop(e.target.value);
  // };

  // const [lan, setlan] = useState('en')

  // const [data, setdata] = useState('this is data')

  let element = useRoutes([
    {
      path: "User",
      element: <User/>,
      Children: [
       { path: "Html", element: <Html />},

       { path: "Css", element: <Css />},
      ],

    },
    
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/Html",
      element: <Html />
    },

    {
      path: "/Css",
      element: <Css />
    },

  ])

  return element;
  // return (
  //   <div>
  //     {/* <input type="text" value={top} onChange={myHandler}></input>
  //     {data
  //       .filter((value, index, array) => {
  //         return value.title.toUpperCase().indexOf(top.toUpperCase()) >= 0;
  //       })
  //       .map((value, index, array) => {
  //         return <tr>{value.title}</tr>;
  //       })} */}

        
  //         {/* <UserLanguage.Provider value={{lan, setlan}}>
  //           <Header2/>
  //           <Child1/>
  //         </UserLanguage.Provider> */}
      
  //   </div>
  // );
};
