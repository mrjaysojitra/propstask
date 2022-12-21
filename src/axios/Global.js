import axios from "axios";

let data = localStorage.getItem("user")
let j = JSON.parse(data);

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = "bearer "+ j?.jwtToken;





