import React from 'react'
import { useState } from 'react'


export const Locform = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    const myHandlear = () =>{
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",pass)
    }
  return (
    <div>
    <form  className='form'>
        <h1>Employe List</h1>
        <label name="name">Fist Name :</label>
        <input type='name' placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)}></input><br/>

        <label name="email">Email :</label>
        <input type='email' placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}></input><br/>

        <label name="pass">Password :</label>
        <input type='password' placeholder='Enter Your Password' onChange={(e)=>setpass(e.target.value)}></input><br/>

        <button onClick={myHandlear}  className="submitButton">submit
                    </button>
    </form>
        <h6 className='data'>
        <div>{localStorage.getItem("name")}</div><hr/>
        <div>{localStorage.getItem("email")}</div><hr/>
        <div>{localStorage.getItem("password")}</div><hr/>
        </h6>
    </div>
  )
}
