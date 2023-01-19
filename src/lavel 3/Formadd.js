import React from 'react'
import { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export const Formadd = () => {
    const [data, setdata] = useState([{
      Education: "",
      ContacNumber: "",
      State: ""
  }])


    const myhandlechang = (e) => {
        setdata({...data, [e.target.name] : e.target.value})
    }

    const onSubmited = (e) => {
        e.preventDefault();
        console.log(data);
    }

   const onAdd = (e) => {
    const alldata = {
        Education: "",
        ContacNumber: "",
        State: ""
    }
    setdata([...data, alldata])
   }
  

  return (
    <div>
      <form onSubmit={onSubmited} >
    {data?.map((value)=>{
        return(
      <div>      
        <h1>Student Form</h1>
         <TextField
              label="Education"
              name="Education"
              onChange={myhandlechang}
              type="text"
              fullWidth

              value={value.Education}
            ></TextField>
            <br /><br />
    
            <TextField
              label="Contac Number"
              name="ContacNumber"
              onChange={myhandlechang}
              value={value.ContacNumber}
              fullWidth

              type="number"
            ></TextField>
            <br /><br />
    
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                value={value.State}
                name="State"
                onChange={myhandlechang}
              >
                <MenuItem value={"Goa"}>Goa</MenuItem>
                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"Haryana"}>Haryana</MenuItem>
                <MenuItem value={"Kerala"}>Kerala</MenuItem>
                <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
              </Select>
            </FormControl><br/>

            <input type="submit" value="submit"></input>
            <input type="submit" onClick={onAdd} value="add"></input>
            </div>    
         )
    })}

  
        </form>    

        
    </div>
  )
}
