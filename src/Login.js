import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Field, Formik, Form } from "formik";
import React from "react";

export const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(e) => {
        console.log(e)
        axios
          .post("http://localhost:4000/accounts/authenticate", e)
          .then(y => {
            console.log(y);
            toast("Login Successfully")
          })
          .catch(y => {
            toast("Login Faild");

            console.log(y);
          });
      }}
    >
      <Form>
        <label>email</label>
        <Field type="email" name="email" id="email"/>

        <label>password</label>
        <Field type="password" name="password" id="password" />
        <br />

        <input type="submit"></input>
      </Form>
    </Formik>
  );
};
