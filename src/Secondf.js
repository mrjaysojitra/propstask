import React, { useState } from "react";
import { Employe } from "./Employe";
import "./form.css";

export const Secondf = () => {
  const [data, setData] = useState({
    fistname: "",
    middlname: "",
    lastname: "",
    userid: "",
    city: "",
    hobbies: [],
    gender: "",
  });

  const [validation, setValidation] = useState({
    fistname: "",
    middlname: "",
    lastname: "",
    userid: "",
    city: "",
  });

  const fistnameHandler = (e) => {
    if (e.target.name == "hobbies") {
      let mydata = data.hobbies;

      if (e.target.checked) {
        mydata.push(e.target.value);

        setData({ ...data, hobbies: mydata });
      } else {
        let x = mydata.filter((g) => {
          return g != e.target.value;
        });
        setData({ ...data, hobbies: x });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
    if (e.target.value == "") {
      setValidation({
        ...validation,
        [e.target.name]: `${e.target.name} is reqaued`,
      });
    } else {
      setValidation({ ...validation, [e.target.name]: "" });
    }

    if (/^[A-Za-z]+$/.test(e.target.value) == false && e.target.name == "fistname") {
     
      setValidation({ ...validation, fistname: "firstname is invalid" });
    }
  
  };

  const allubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={allubmit} className="">
      <h1>Employe List</h1>
      <span>{validation.fistname}</span>
      <label name="fistname">Fist Name :</label>
      <input type="text" name="fistname" onChange={fistnameHandler}></input>
      <br />

      <span>{validation.middlname}</span>
      <label name="text">Middle Name :</label>
      <input type="text" name="middlname" onChange={fistnameHandler}></input>
      <br />

      <span>{validation.lastname}</span>
      <label name="text">Last Name :</label>
      <input type="text" name="lastname" onChange={fistnameHandler}></input>
      <br />

      <span>{validation.userid}</span>
      <label name="text">userid :</label>
      <input type="text" name="userid" onChange={fistnameHandler}></input>
      <br />

      <span>{validation.city}</span>
      <label name="text">location :</label>
      <input type="text" name="city" onChange={fistnameHandler}></input>
      <br />

      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        onClick={fistnameHandler}
      ></input>

      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        onClick={fistnameHandler}
      ></input>

      <label>Music</label>
      <input
        type="checkbox"
        name="hobbies"
        value="Music"
        onClick={fistnameHandler}
      ></input>

      <label>Cricket</label>
      <input
        type="checkbox"
        name="hobbies"
        value="Cricket"
        onClick={fistnameHandler}
      ></input>

      <button type="text" className="submitButton"> {" "}
        submit
      </button>
    </form>
  );
};
