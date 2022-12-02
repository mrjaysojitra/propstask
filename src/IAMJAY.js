import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./IAMJAY.css";
import * as yup from 'yup';


let schema = yup.object().shape({
  Firstname: yup.string().max(25, 'Maximum 25 Limit').matches(/(?=.*[A-Z])/,"Uppercase required").required("Firstname is required"),
  Middlname: yup.string().max(25, 'Maximum 25 Limit').matches(/(?=.*[A-Z])/,"Uppercase required").required("Middlname is required"),
  Lastname: yup.string().required("Lastname is required"),
  gpcode: yup.string().max(6, 'Too Long!').matches(/(?=.*[0-9])/, "GP Code must contain a number.")  .required("GP Code is required"),
  Email: yup.string().email('Invalid email')  .required("Email is required"),
  Password: yup.string() .matches(

    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  Address: yup.string().max(250, 'Maximum 25 Limit').required("Address is required")

})
export const IAMJAY = () => {
  return (
    <>
      <Formik
        initialValues={{
          fistname: "",
          lastname: "",
          city: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>FistName:</label>
          <Field type="text" name="fistname" id="fistname"></Field>

          <label>LastName:</label>
          <Field type="text" name="lastname"></Field>

          <label>CityName:</label>
          <Field type="text" name="city"></Field>

          <input type="submit"></input>
        </Form>
      </Formik>
    </>
  );
};

export const IAMJAY2 = () => {
  return (
    <Formik

        validationSchema={schema}
        
      initialValues={{
        Firstname: "",
        Middlname: "",
        Lastname: "",
        Email: "",
        gpcode: "",
        Password: "",
        Address: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <h1>User Form</h1>
        <label>Firstname:</label>
        <Field type="text" name="Firstname"></Field>
        <ErrorMessage
        name="Firstname"
        component="div"
        className="text-danger"
       />

        <label>Middlname:</label>
        <Field type="text" name="Middlname"></Field>
        <ErrorMessage
        name="Middlname"
        component="div"
        className="text-danger"
        />

        <label>Lastname:</label>
        <Field type="text" name="Lastname"></Field>
        <ErrorMessage
        name="Lastname"
        component="div"
        className="text-danger"
        />

        <label>Gmail:</label>
        <Field type="email" name="Email"></Field>
        <ErrorMessage
        name="Email"
        component="div"
        className="text-danger"
        />
        <label>GP code:</label>
        <Field type="text" name="gpcode"></Field>
        <ErrorMessage
        name="gpcode"
        component="div"
        className="text-danger"
        />

        <label>Password:</label>
        <Field type="password" name="Password"></Field>
        <ErrorMessage
        name="Password"
        component="div"
        className="text-danger"
        />

        <label>Address:</label>
        <Field type="text" name="Address"></Field>
        <ErrorMessage
        name="Address"
        component="div"
        className="text-danger"
        />
        <br />

        <input type="submit"></input>

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100"
          rel="stylesheet"
        />

        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </Form>
    </Formik>
  );
};

export const IAMJAY3 = () => {
  return (
    <Formik
      initialValues={{
        numberplat: "",
        carmodal: "",
        carmake: "",
        issuv: "",
        fual: "",
        Engine: ""
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
          <h1>Car Form</h1>
        <label>Number Plat:</label>
        <Field type="text" name="numberplat"></Field>

        <label>Car Model:</label>
        <Field as="select" name="carmodal">
          <option value="Swift">Swift</option>
          <option value="Baleno">Baleno</option>
          <option value="WagonR">WagonR</option>
          <option value="Alto"> Alto</option>
          <option value="Dzire">Dzire</option>
        </Field>

        <label>Car Company:</label>
        <Field as="select" name="carmake">
          <option value="Toyota">Toyota </option>
          <option value="VolkswagenAG">VolkswagenAG</option>
          <option value="Renault-Nissan">Renault-Nissan</option>
          <option value="Hyundai"> Hyundai </option>
          <option value="Ford">Ford</option>
        </Field>

        <label>
          <Field type="checkbox" name="issuv" value="issuv"/>
          issuv
        </label>

        <label>Fual Type:</label>
        <label>
          <Field type="radio" name="fual" value="CNG"/>
            CNG
        </label>

        <label>
          <Field type="radio" name="fual" value="Petrol" />
            Petrol
        </label>

        <label>
          <Field type="radio" name="fual" value="Disel"/>
            Disel
        </label>

        <label>
          <Field type="checkbox" name="Engine" value='Right' />
          ISBS6 
        </label>

        <input type='submit'></input>

        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </Form>
    </Formik>
  );
};
