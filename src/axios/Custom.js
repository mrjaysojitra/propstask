import axios from "axios";

let data = localStorage.getItem("user")
let j = JSON.parse(data);

const Custom = axios.create({
    baseURL: "'http://localhost:4000",
    headers: {
        Accept: "application/json",
        Authorization: "bearer "+ j?.jwtToken
    },
});

export default Custom;