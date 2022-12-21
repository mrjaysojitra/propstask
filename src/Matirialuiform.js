import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

export const Matirialuiform = () => {
  const Country = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "Australia",
      label: "Australia",
    },
    {
      value: "Germany",
      label: "Germany",
    },
  ];

  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    userid: "",
    cityselect: "",
  });

  const myhandlechang = (e) => {
    setdata(e.target.value);
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmited = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmited}>
        <TextField
          label="First Name"
          name="firstname"
          onChange={myhandlechang}
          type="text"
        ></TextField>
        <br />

        <TextField
          label="Last Name"
          name="las tname"
          onChange={myhandlechang}
          type="text"
        ></TextField>
        <br />

        <TextField
          label="User Id"
          name="userid"
          type="number"
          onChange={myhandlechang}
        ></TextField>
        <br />

        <TextField
          select
          label="Select Your Country"
          name="Countryselect"
          value={data.Countryselect}
          onChange={myhandlechang}
          helperText="Please select your Country"
        >
          {Country.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};
