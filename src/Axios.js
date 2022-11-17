import React, { useEffect, useState } from "react";
import axios from "axios";

export const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/testing/history")
      .then((j) => {
        setData(j.data.data);
      });
  }, []);
  return (
    <div>
      {data.map((e) => {
        return (
          <tr>
            <th>{e.day}</th>
            <th>{e.totalSamplesTested}</th>
            <th>{e.totalIndividualsTested}</th>
            <th>{e.totalPositiveCases}</th>
            <th>{e.source}</th>
          </tr>
        );
      })}
    </div>
  );
};

export const Axio2 = () => {
  const [up, setUp] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/users")
    .then((s) => {
      setUp(s.data);
    });
  }, []);
  return (
    <div>
      {up.map((x) => {
        return (
          <tr>
            <th>{x.id}</th>
          </tr>
        );
      })}
    </div>
  );
};
