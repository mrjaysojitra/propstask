import React from "react";
import Select from "react-select";
import { useState } from "react";

export const Form2 = () => {
  const [data, setdata] = useState({
    Name: "",
    Degree: "",
    Collage: "",
  });

  const degreedata = [
    { value: "MCA", label: "MCA" },
    { value: "B.com", label: "B.com" },
    { value: "MBA", label: "MBA" },
  ];

  const collagedata = [
    { value: "MSU", label: "MSU" },
    { value: "Parul", label: "Parul" },
    { value: "Silver ok", label: "Silver ok" },
  ];

  const myHandlear = (e) => {
    console.log(e);
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const allsubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={allsubmit}>
        <h1>Student List</h1>
        <label>Name :</label>
        <input type="text" name="Name" onChange={myHandlear}></input>

        <label>Select Your Degree :</label>
        <Select
          onChange={(e) => {
            myHandlear({ target: { name: "Degree", value: e.value } });
          }}
          options={degreedata}
        />

        <label>Select Your Collage :</label>
        <Select
          onChange={(e) => {
            myHandlear({ target: { name: "Collage", value: e.value } });
          }}
          options={collagedata}
        />
        <br />

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export const Form3 = () => {
  const [second, setSecond] = useState(false);
  
  const [first, setfirst] = useState({
    fname: "",
    digree: "",
    collage: "",
    firstdate: "",
    lastdate: "",
    checkbox: "",
  });

  const namedata = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "mrs" },
  ];

  const degreedata2 = [
    { value: "MCA", label: "MCA" },
    { value: "B.com", label: "B.com" },
    { value: "MBA", label: "MBA" },
    { value: "CA", label: "CA" },
    { value: "CS", label: "CS" },
    { value: "M.com", label: "M.com" },
    { value: "Pgdca", label: "Pgdca" },
    { value: "BA", label: "BA" },
  ];

  const collagedata2 = [
    { value: "MSU", label: "MSU" },
    { value: "Parul", label: "Parul" },
    { value: "Silver ok", label: "Silver ok" },
    { value: "Nirma", label: "Nirma" },
    { value: "cept", label: "cept" },
    { value: "RK", label: "RK" },
  ];

  const myHandlear2 = (e) => {
    console.log(e);
  

    if (e.target.type == "checkbox") {
      if (e.target.checked == true) {
        setSecond(true);

        setfirst({...first, "lastdate" : ""})
      }
     else{
      setSecond(false);
     }
    } else {
      setfirst({ ...first, [e.target.name]: e.target.value });
    }
  };

  const allsubmit2 = (e) => {
    e.preventDefault();
    console.log(first);
  };

  return (
    <div>
      <form onSubmit={allsubmit2}>
        <Select
          onChange={(e) => {
            myHandlear2({ target: { name: "fname", value: e.value } });
          }}
          options={namedata}
        ></Select>
        <input
          type="text"
          onChange={myHandlear2}
          placeholder="Enter Your Name"
        />
        <br />
        <Select
          onChange={(e) => {
            myHandlear2({ target: { name: "collage", value: e.value } });
          }}
          options={collagedata2}
          placeholder="Select Your Collage Name"
        ></Select>{" "}
        <br />
        <Select
          onChange={(e) => {
            myHandlear2({ target: { name: "digree", value: e.value } });
          }}
          options={degreedata2}
          placeholder="Select Your Degree Name"
        ></Select>
        <br />
        <label>Starting Date</label>
        <input type="date" name="firstdate" onChange={myHandlear2} />
        <br />
        <label>Last Date</label>

        <input type="date" name="lastdate" onChange={myHandlear2} value={first.lastdate}  disabled={second}/>
        <label>Currently Pursuing</label>
        
        <input type="checkbox" onChange={myHandlear2}  />
        <input type="submit" />
      </form>
    </div>
  );
};
