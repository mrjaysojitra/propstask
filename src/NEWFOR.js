import React from "react";
import { MYFORM } from "./MYFORM.js";
import { useState } from "react";

export const NEWFOR = () => {
  const [data, setdata] = useState(
    {
      firstname: "",
      lastname: "",
      digree: "",
      contactnumber: "",
      city: "",
    }
  );

  const [second, setsecond] = useState([]);
  const [index, setindex] = useState(-1)

  const myHandler = (e) => {
    setdata({...data, [e.target.name] : e.target.value})
  };

  const mySubmit = (e) => {
    e.preventDefault();

    if (index >= 0) {
              let d = [...second];

              d[index].firstname = data.firstname;
              d[index].lastname = data.lastname;
              d[index].digree = data.digree;
              d[index].contactnumber = data.contactnumber;
              d[index].city = data.city;

              setsecond(d)

    } else {
      let stor = [...second];
      stor.push(data);
  
      setsecond(stor)
    }
  }

  const Edit = (index) => {
      let mydata = second[index]
      setdata(mydata)
      setindex(index)
  }

  const mydelete = (index)=>{
        const myAr = [...second]

        myAr.splice(index,1)

        setsecond(myAr)
  }

  return (
    <div>
      <form onSubmit={mySubmit}>
      
        <h1>Student List</h1>
        <label>First Name</label>
        <input type="text" value={data.firstname} onChange={myHandler} name="firstname"></input>

        <label>Last Name</label>
        <input type="text" onChange={myHandler} name="lastname"></input>

        <label>Digree</label>
        <input type="text" onChange={myHandler} name="digree"></input>

        <label>Contac Number</label>
        <input type="number" onChange={myHandler} name="contactnumber"></input>

        <label>City</label>
        <input type="text" onChange={myHandler} name="city"></input><br/>

        <input type="submit" value="Submit"></input>
      </form>

   
      <MYFORM all={second} aditbutton={Edit}  rebutton={mydelete}></MYFORM>

    </div>
  );
};
