import React, { useEffect, useState } from "react";

export const App = () => {
  const [data, setDeta] = useState([]);
  const [top, setTop] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((j) => j.json())
      .then((j) => setDeta(j));
  }, []);

  const myHandler = (e) => {
    setTop(e.target.value);
  };

  return (
    <div>
      <input type="text" value={top} onChange={myHandler}></input>
      {data
        .filter((value, index, array) => {
          return value.title.toUpperCase().indexOf(top.toUpperCase()) >= 0;
        })
        .map((value, index, array) => {
          return <tr>{value.title}</tr>;
        })}
    </div>
  );
};
