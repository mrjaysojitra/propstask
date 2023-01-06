import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export const Sigup = () => {
  const mynav =useNavigate()
  
    const [data, setdata] = useState({
        FirstName: "",
        LastName: "",
        Education: "",
        ContacNumber: "",
        State: "",
        Country: "",
        Address: "",
        Email: "",
        Password: "",
        confirmpassword: "",
      });
    
      // const [row, setrow] = useState([]);
   
    
      const myhandlechang = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
      };
    
      const onSubmited = (e) => {
        e.preventDefault();
        console.log(data);
    
        axios
          .post("http://localhost:4000/accounts", data)
          .then((y) => {
            console.log(y);
            localStorage.setItem("login", JSON.stringify(y.data));
            toast("Login Successfully");
          })
          .catch((y) => {
            console.log(y);
            toast("Login Faild");
          });
      };

      const logout =() =>{
localStorage.removeItem("user")
mynav("/")
      }
    
      return (
        <>
          <form onSubmit={onSubmited}>
            <h1 style={{color: 'black'}}>Registration Form</h1>
            <TextField
              label="First Name"
              name="FirstName"
              onChange={myhandlechang}
              type="text"
            ></TextField>
            <br />
    
            <TextField
              label="Last Name"
              name="LastName"
              onChange={myhandlechang}
              type="text"
            ></TextField>
            <br />
    
            <TextField
              label="Education"
              name="Education"
              onChange={myhandlechang}
              type="text"
            ></TextField>
            <br />
    
            <TextField
              label="Contac Number"
              name="ContacNumber"
              onChange={myhandlechang}
              type="number"
            ></TextField>
            <br />
    
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                name="State"
                onChange={myhandlechang}
              >
                <MenuItem value={"Goa"}>Goa</MenuItem>
                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"Haryana"}>Haryana</MenuItem>
                <MenuItem value={"Kerala"}>Kerala</MenuItem>
                <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
              </Select>
            </FormControl>
            <br />
    
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Country"
                name="Country"
                onChange={myhandlechang}
              >
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"Nepal"}>Nepal</MenuItem>
                <MenuItem value={"Philippines"}>Philippines</MenuItem>
                <MenuItem value={"Russia"}>Russia</MenuItem>
                <MenuItem value={"South Korea"}>South Korea</MenuItem>
              </Select>
            </FormControl>
            <br />
    
            <TextField
              label="Email"
              name="Email"
              onChange={myhandlechang}
              type="email"
            ></TextField>
            <br />
    
            <TextField
              label="Password"
              name="Password"
              onChange={myhandlechang}
              type="password"
            ></TextField>
            <br />
    
            <TextField
              label="confirm password"
              name="confirmpassword"
              onChange={myhandlechang}
              type="password"
            ></TextField>
            <br />
    
            <TextField
              label="Address"
              name="Address"
              onChange={myhandlechang}
              type="text"
            ></TextField>
            <br />
    
            <input type="submit" value="submit"></input><br/>
            <input onClick={logout}  type="submit"  value="Logout"></input>
          </form>
        </>
      );
  
}
