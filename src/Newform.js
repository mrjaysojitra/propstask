import React from 'react'
import { useState } from 'react'

export const Newform = () => {
    const [data, setdata] = useState({
        fistname: "",
        lastname: "",
        email: "",
        password: "",
        country: "",
        month: "",
        day: "",
        year: "",
        checkbox: "",
        checkbox2: ""
    })

    const myHandler = (e) => {
        if (e.target.type == 'checkbox') {
            setdata({...data, [e.target.name] : e.target.checked})
        } 
        
        else
        {
            setdata({...data, [e.target.name] : [e.target.value]})
        }
        
       
    }

   
    const allubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <form onSubmit={allubmit}>
            <h1>Enter Your Data</h1>
        <label>Fist Name</label>
        <input type='text' name='fistname' onChange={myHandler}></input>

        <label>last Name</label>
        <input type='text' name='lastname' onChange={myHandler}></input>

        <label>Email</label>
        <input type='email' name='email' onChange={myHandler}></input>

        <label>Password</label>
        <input type='password' name='password' onChange={myHandler}></input>

        <label>Country</label>
        <input type='text' name='country' onChange={myHandler}></input>

       

          <label for="Birthdate">Birth Date</label>
                 <select name="Month" onChange={myHandler}>
                     <option >Month</option>
                     <option>Janu</option>
                     <option>February</option>
                     <option >March</option>
                 </select>

                 <select name="day"  onChange={myHandler}>
                     <option >Day</option>
                     <option>5</option>
                     <option>6</option>
                     <option >7</option>
                 </select>

                 <select name="year"  onChange={myHandler}>
                     <option >Year</option>
                     <option>2019</option>
                     <option>2020</option>
                     <option >2021</option>
                 </select><br/>
       
        <input type='checkbox' onClick={myHandler}  name='checkbox'></input>     
        <label>W3Schools is a freemium educational website for learning coding online. Initially released in 1998</label>   

        <input type='checkbox' onClick={myHandler} x name='checkbox2'></input>     
        <label>W3Schools is a freemium educational website for learning coding online.</label>     

        <button type="text" className="submitButton"> {" "}
        submit
      </button>
    </form>
  )
}
