import React from 'react'
import { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export const Form2lave3 = () => {
    const [first, setfirst] = useState({
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        state: "",
        contry: ""
    })


    const myhandlechang = (e) => {
        setfirst({...first,[e.target.name] : e.target.value})
    }

    const [second, setsecond] = useState([{
        edulavel: "",
        university: "",
        dgree: "",
        startdate: "",
        enddate: ""
    }])

    const handleAddClick = () => {
        setsecond([...second, {     edulavel: "",
        university: "",
        dgree: "",
        startdate: "",
        enddate: ""}]);
      };


      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...second];
        list[index][name] = value;
        setsecond(list);
      };
    

    const [third, setthird] = useState([{
        company: "",
        designsan: "",
        startdatec: "",
        enddatec: ""
    }])

    const handleInputChange3 = (e, index) => {
      const { name, value } = e.target;
      const list = [...third];
      list[index][name] = value;
      setthird(list);
    };

    const handleAddClick3 = () => {
        setthird([...third, {  company: "",
        designsan: "",
        startdatec: "",
        enddatec: ""}]);
      };

    const onSubmited = (e) => {
      e.preventDefault();
      console.log([first,second,third])
    }  

    const  handleReset = () => {
        Array.from(document.querySelectorAll("TextField")).forEach(
          TextField => (TextField.value = "")
        );
       
      };   

      

  return (
    <div>

    {/***************************** Basic Information  *********************/}

        <form >
            <h1>Basic Info</h1>
            <TextField
              label="FirstName"
              name="firstname"
              onChange={myhandlechang}
              type="text"
            ></TextField>
            <br />
    
            <TextField
              label="LastName"
              name="lastname"
              onChange={myhandlechang}
              type="text"
            ></TextField><br />

            <TextField
              label="Address"
              name="address"
              onChange={myhandlechang}
              type="address"
            ></TextField><br />

             <TextField
              label="City"
              name="city"
              onChange={myhandlechang}
              type="text"
            ></TextField><br />


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                name="state"
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
                name="country"
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

  {/***************************** Baic Education  *********************/}

      <h1>Education</h1>

      {second.map((x, i)=>{
        return(<div>


          <TextField
              label="Education lavel"
              name="edulavel"
              value={x.edulavel}
              fullWidth
              onChange={e => handleInputChange(e, i)}
              type="text"
            ></TextField>
            <br />  <br />

            <TextField
              label="University Name"
              name="university"
              value={x.university}
              fullWidth
              onChange={e => handleInputChange(e, i)}
              type="text"
            ></TextField>
            <br />  <br />

            <TextField
              label="Dgree"
              name="dgree"
              fullWidth
              onChange={e => handleInputChange(e, i)}
              value={x.dgree}
              type="text"
            ></TextField>
            <br />  <br />

            <TextField
              label="Start Date"
              name="startdate"
              fullWidth
              onChange={e => handleInputChange(e, i)}
              value={x.startdate}
              type="date"
            ></TextField>
            <br />  <br />

            <TextField
              label="End Date"
              name="enddate"
              fullWidth
              onChange={e => handleInputChange(e, i)}
              value={x.enddate}
              type="date"
            ></TextField>
            <br />  <br />

            <div className="btn-box">
              
              {second.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
            
            <div>{console.log(second)}</div>
        </div>)
      })}

       {/***************************** Baic Company  *********************/}
           
      <h1>Company</h1>
      {third.map((e, i)=>{
        return(
          <div>
          <TextField
              label="Company Name"
              name="company"
              fullWidth
              onChange={e => handleInputChange3(e, i)}
              type="text"
            ></TextField>
            <br />  <br />

            <TextField
              label="designsan"
              name="designsan"
              fullWidth
              onChange={e => handleInputChange3(e, i)}
              type="text"
            ></TextField>
            <br />  <br />

            <TextField
              label="Start Date"
              name="startdatec"
              fullWidth
              onChange={e => handleInputChange3(e, i)}
              type="date"
            ></TextField>
            <br />  <br />

            <TextField
              label="End Date"
              name="enddatec"
              fullWidth
              onChange={e => handleInputChange3(e, i)}
              type="date"
            ></TextField>
            <br />  <br />


            <div className="btn-box">
              
              {third.length - 1 === i && <button onClick={handleAddClick3}>Add</button>}
            </div>
          </div>

        )
      })}
      <button onClick={handleReset}>Reset</button>
      <button onClick={onSubmited}>Submit</button>
    
        </form>        
    </div>
  )
}
