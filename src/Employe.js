import React from 'react'
import { useState } from 'react'

export const Employe = () => {
    const [employ, setEmploy] = useState({
        fistname : "",
        middlname : "",
        lastname : "",
        contactnumber : "",
        userid : "",
        location : ""
    })

    const fistnameHandler = (e) => {
        setEmploy ({...employ,fistname : e.target.value})
    }

    const middlnameHandler = (e) => {
        setEmploy ({...employ,middlname : e.target.value})
    }

    const lastnameHandler = (e) => {
        setEmploy ({...employ,lastname : e.target.value})
    }

    const contactnameHandler = (e) => {
        setEmploy ({...employ,contactnumber : e.target.value})
    }

    const usernameHandler = (e) => {
        setEmploy ({...employ,userid : e.target.value})
    }   

    const locationnameHandler = (e) => {
        setEmploy ({...employ,location : e.target.value})
    }

    const allsubmit = (e) => {
        e.preventDefault();
        console.log(employ)

    }

  return (
    <form onSubmit={allsubmit}>

        <input type='text' onChange={fistnameHandler}></input><br/>
        <input type='text' onChange={middlnameHandler}></input><br/>
        <input type='text' onChange={lastnameHandler}></input><br/>
        <input type='text' onChange={contactnameHandler}></input><br/>
        <input type='text' onChange={usernameHandler}></input><br/>
        <input type='text' onChange={locationnameHandler}></input><br/>

        <input type='submit' value='submit'></input>
    </form>
  )
}
