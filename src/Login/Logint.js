import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";


export const Logint = () => {
    // const myNav = useNavigate();
    
    const displaydata = () => {
        let data = localStorage.getItem("user");
        let j = JSON.parse(j.data);
        
     

        axios
          .get("http://localhost:4000/accounts")
           
       
          .then((y) => {
            console.log(y.data);
          })
          .catch((y) => {
            console.log(y);
          });
      };



      return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}

          
          onSubmit={(e) => {
            console.log(e);
            axios
              .post("http://localhost:4000/accounts/authenticate", e)
              .then((y) => {
                console.log(y);
                localStorage.setItem("user", JSON.stringify(y.data));
                toast("Login Successfully");
                // myNav("/sigup")
              })
              .catch((y) => {
                toast("Login Faild");
                console.log(y);
              });
         
            
          }}
        >
          <Form>
            <label>email</label>
            <Field type="email" name="email" id="email" />
    
            <label>password</label>
            <Field type="password" name="password" id="password" />
            <br />
    
            <input type="submit"></input>
    
          </Form>
        </Formik>
    
        <button onClick={displaydata}>Fatch Now</button>
    
      </>  
      );
}
