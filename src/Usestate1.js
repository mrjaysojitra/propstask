import React, { useEffect } from "react";
import { useState } from "react";

import { Setcounter } from "./Setcounter";

export const Usestate1 = () => {
  const [data, setdata] = useState("5");
  const [item, setitem] = useState("5");

  const myData = (e) => {
    setitem(e.target.value);
  };

  const Submit = () => {
    setdata(item);
  };

  return (
    <div>
      <input type="number" value={item} onChange={myData} />
      <Setcounter item={data} />
      <button onClick={Submit}>Active</button>
    </div>
  );
};
