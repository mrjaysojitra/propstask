import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Efect = () =>  {
  const [data, fachData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((k) => k.json())
      .then((k) => fachData(k));
  },[]);

 
  
 const asending = () => {
  let mydata1 = [...data]
  mydata1.sort(function(a,b) {

      if(a.id > b.id)
      return 1
      else
      return -1;

    })
    fachData(mydata1)

  }

  const disending = () => {
    let mydata1 = [...data]
    mydata1.sort(function(a,b) {

      if(a.id > b.id)
      return -1
      else
      return 1;

    })

    console.log(mydata1);
    fachData(mydata1)
    console.log(data);
  }
  
  return (
    <div>
      <button type="button" onClick={asending}>asending</button>
      <button onClick={disending}>disending</button>
      {data.map((mydata) => {
        return (
          <>
            <div>{mydata.id}</div>
          </>
        );
      })}
    </div>
  );
};
