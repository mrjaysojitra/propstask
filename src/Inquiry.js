import { TextField, MenuItem,
    InputLabel,Select, 
    FormControl,FormControlLabel,
     Radio , 
     FormLabel,
      RadioGroup,
    
 } from '@mui/material'
import React from 'react'
import { useState } from 'react'
// import { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const Inquiry = () => {

    // const [value, setValue] = React.useState<Dayjs | null>(null);

    const [data, setdata] = useState({
        Studentname: "",
        Parentsname:    "",
        Birthd: "",
        Gender: "",
        Maritals: "",
        Medium: "",
        Education: "",
        Contry: "",
        State: "",
        Permanentad: "",
        Zipcode: "",
        Mobail: "",
        Email: "",
        Whatsapp: ""

    })

    const myHandler = (e) => {
        setdata({...data,[e.target.name] : e.target.value})
    }

    const onSubmited = (e) => {
        e.preventDefault();
        console.log(data)
    }

  return (
    <div>
       

            <form onSubmit={onSubmited}>
            <h1 style={{color: 'black'}}>Inquiry Form</h1>

                <TextField
                label='Sudent Name'
                name='Studentname'
                onChange={myHandler}
                type='text'
                >
                </TextField><br/>

                <TextField
                label='Parents Name'
                name='Parentsname'
                onChange={myHandler}
                type='text'
                >
                </TextField><br/>

                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                       <DatePicker
                           label="Basic example"
                           value={value}
                           onChange={(newValue) => {
                           setValue(newValue);
                                            }}
                     renderInput={(params) => <TextField {...params} />}
                                        />
                </LocalizationProvider><br/> */}

                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          defaultValue="female"
                          name="Gender"
                          onChange={myHandler}
                             >
                         <FormControlLabel value="female" control={<Radio />} label="Female" />
                         <FormControlLabel value="male" control={<Radio />} label="Male" />
                         <FormControlLabel value="other" control={<Radio />} label="Other" />
                         </RadioGroup>
                </FormControl><br/>

                <TextField
                label='Marital Status'
                name='Maritals'
                onChange={myHandler}
                type='text'
                >
                </TextField><br/>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Medium</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Medium"
                name="Medium"
                onChange={myHandler}
              >
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                <MenuItem value={"Gujarati"}>Gujarati</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
              </Select>
            </FormControl>
            <br />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Education</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Education"
                name="Education"
                onChange={myHandler}
              >
                <MenuItem value={"10th Pass"}>10th Pass</MenuItem>
                <MenuItem value={"12th Pass"}>12th Pass</MenuItem>
                <MenuItem value={"Graduate"}>Graduate</MenuItem>
              </Select>
            </FormControl>
            <br />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                name="State"
                onChange={myHandler}
              >
                <MenuItem value={"Goa"}>Goa</MenuItem>
                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"Haryana"}>Haryana</MenuItem>
                <MenuItem value={"Kerala"}>Kerala</MenuItem>
                <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
              </Select>
            </FormControl>
            <br />
    
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Country"
                name="Country"
                onChange={myHandler}
              >
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"Nepal"}>Nepal</MenuItem>
                <MenuItem value={"Philippines"}>Philippines</MenuItem>
                <MenuItem value={"Russia"}>Russia</MenuItem>
                <MenuItem value={"South Korea"}>South Korea</MenuItem>
              </Select>
            </FormControl>
            <br />

            <TextField
                label='Permanent Address'
                name='Permanentad'
                onChange={myHandler}
                type='text'
                >
            </TextField><br/>

            <TextField
                label='Zipcode'
                name='Zipcode'
                onChange={myHandler}
                type='number'
                >
            </TextField><br/>

            <TextField
                label='Mobail Number'
                name='Mobail'
                onChange={myHandler}
                type='number'
                >
            </TextField><br/>

            <TextField
                label='Email'
                name='Email'
                onChange={myHandler}
                type='email'
                >
            </TextField><br/>

            <TextField
                label='Whatsapp Number'
                name='Whatsapp'
                onChange={myHandler}
                type='number'
                >
            </TextField><br/>

            <input type='submit' value='Submit'></input>
            </form>
    </div>
  )
}
