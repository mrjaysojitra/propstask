import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const Upload = () => {
  const [data, setdata] = useState(null);

  const [second, setsecond] = useState([])

  const myHandler = (e) => {
    console.log(e.target.files);
    setdata(e.target.files[0]);
  };

  const saveData = () => {
    let myform = new FormData();
    myform.append("file", data);

    axios.post("http://localhost:8080/upload", myform).then(y => {
      console.log(y.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/files").then(y => {
      setsecond(y.second);
    });
  });

  return (
    <div>
      {second.map((value) => {
        return (
          <table>
            <tr>
              <td>{value.name}</td>
            </tr>
          </table>
        );
      })}
      <input type="file" onChange={myHandler}></input>

      <input type="button" value="Save" onClick={saveData}></input>
    </div>
  );
};
