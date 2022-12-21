// import {
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { AgGridReact } from "ag-grid-react";
// import React from "react";
// import { useState, useEffect } from "react";

// export const Test3 = () => {
//   const [data, setdata] = useState({
//     FirstName: "",
//     LastName: "",
//     Education: "",
//     ContacNumber: "",
//     State: "",
//     Country: "",
//     Address: "",
//     Email: "",
//     Password: "",
//     confirmpassword: "",
//   });

//   const [row, setrow] = useState([]);

//   const [col, setcol] = useState([
//     { field: "FirstName", filter: true },
//     { field: "LastName", filter: true },
//     { field: "Education" },
//     { field: "ContacNumber", filter: true },
//     { field: "State", filter: true },
//     { field: "Country", filter: true },
//     { field: "Address", filter: true },
//     { field: "Email", filter: true },
//     { field: "Password", filter: true },
//     { field: "confirmpassword", filter: true },
//   ]);

//   const myhandlechang = (e) => {
//     setdata({ ...data, [e.target.name]: e.target.value });
//   };

//   const onSubmited = (e) => {
//     e.preventDefault();
//     console.log(data);

//     axios
//       .post("http://localhost:4000/accounts", data)
//       .then((y) => {
//         console.log(y);
//         localStorage.setItem("login", JSON.stringify(y.data));
//         toast("Login Successfully");
//       })
//       .catch((y) => {
//         console.log(y);
//         toast("Login Faild");
//       });
//   };

//   return (
//     <>
//       <form onSubmit={onSubmited}>
//         <h1>Registration Form</h1>
//         <TextField
//           label="First Name"
//           name="FirstName"
//           onChange={myhandlechang}
//           type="text"
//         ></TextField>
//         <br />

//         <TextField
//           label="Last Name"
//           name="LastName"
//           onChange={myhandlechang}
//           type="text"
//         ></TextField>
//         <br />

//         <TextField
//           label="Education"
//           name="Education"
//           onChange={myhandlechang}
//           type="text"
//         ></TextField>
//         <br />

//         <TextField
//           label="Contac Number"
//           name="ContacNumber"
//           onChange={myhandlechang}
//           type="number"
//         ></TextField>
//         <br />

//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">State</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="State"
//             name="State"
//             onChange={myhandlechang}
//           >
//             <MenuItem value={"Goa"}>Goa</MenuItem>
//             <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
//             <MenuItem value={"Haryana"}>Haryana</MenuItem>
//             <MenuItem value={"Kerala"}>Kerala</MenuItem>
//             <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Country</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Country"
//             name="Country"
//             onChange={myhandlechang}
//           >
//             <MenuItem value={"India"}>India</MenuItem>
//             <MenuItem value={"Nepal"}>Nepal</MenuItem>
//             <MenuItem value={"Philippines"}>Philippines</MenuItem>
//             <MenuItem value={"Russia"}>Russia</MenuItem>
//             <MenuItem value={"South Korea"}>South Korea</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <TextField
//           label="Email"
//           name="Email"
//           onChange={myhandlechang}
//           type="email"
//         ></TextField>
//         <br />

//         <TextField
//           label="Password"
//           name="Password"
//           onChange={myhandlechang}
//           type="password"
//         ></TextField>
//         <br />

//         <TextField
//           label="confirm password"
//           name="confirmpassword"
//           onChange={myhandlechang}
//           type="password"
//         ></TextField>
//         <br />

//         <TextField
//           label="Address"
//           name="Address"
//           onChange={myhandlechang}
//           type="text"
//         ></TextField>
//         <br />

//         <input type="submit" value="submit"></input>
//       </form>
//     </>
//   );
// };

// export const Test4 = () => {
//   const [dlogin, setdlogin] = useState({
//     Email: "",
//     Password: "",
//   });

//   const displaydata = () => {
//     let data = localStorage.getItem("user");
//     let j = JSON.parse(data);

//     axios
//       .get("http://localhost:4000/accounts")

//       .then((y) => {
//         console.log(y.dlogin);
//         setrow(y.dlogin);
//       })
//       .catch((y) => {
//         console.log(y);
//       });
//   };

//   const myhandlechang2 = (e) => {
//     setdlogin({ ...dlogin, [e.target.name]: e.target.value });
//   };

//   const onSubmit2 = (e) => {
//     e.preventDefault();
//     console.log(dlogin);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit2}>
//         <h1>Login </h1>
//         <TextField
//           label="Email"
//           name="Email"
//           onChange={myhandlechang2}
//           type="email"
//         ></TextField>
//         <br />

//         <TextField
//           label="Password"
//           name="Password"
//           onChange={myhandlechang2}
//           type="password"
//         ></TextField>
//         <br />

//         <input type="submit" value="submit"></input>

//         <button onClick={displaydata}>Fatch Now</button>
//       </form>

//       <div className="ag-theme-alpine" style={{ width: 800, height: 800 }}>
//         <AgGridReact rowData={row} columnDefs={}></AgGridReact>
//       </div>
//     </div>
//   );
// };
