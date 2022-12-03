import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const Poseapi = () => {
    const [data, setdata] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true
    })

    const myHandler = (e) => {
        setdata({...data, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/accounts/register",data)
        .then(y=>{console.log(y.data)})
        
    }

  return (
    <div>

    <form onSubmit={onSubmit}>
            <h1>Employe List</h1>
        <label>title</label>
        <input type='text' name='title' onChange={myHandler}></input><br/>

        <label>firstName</label>
        <input type='text'  name='firstName' onChange={myHandler}></input><br/>

        <label>lastName</label>
        <input type='text' name='lastName' onChange={myHandler}></input><br/>

        <label>email</label>
        <input type='text'  name='email' onChange={myHandler}></input><br/>

        <label>password</label>
        <input type='password'  name='password' onChange={myHandler}></input><br/>

        <label>confirmPassword</label>
        <input type='password'  name='confirmPassword' onChange={myHandler}></input><br/>

        <input type='submit' value='save'></input>
        </form>

        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
    </div>  
  )
}
