import axios from 'axios'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'

export const Task2 = () => {
  return (
    <Formik
    initialValues={{
        id: "",
        name: "",
        username: "",
        email: "",
        address: ""
    }}

    onSubmit={((e)=>{
        axios.post("https://jsonplaceholder.typicode.com/users",e)
        .then(y => {console.log(y)

        toast("Data Saved")

        }).catch(y =>{
            console.log(y)

            toast("Data ansaved")
        })
    })}
    
    >

    <Form>
        <label>id :</label>
        <Field type='text' name='id'></Field>

        <label>name :</label>
        <Field type='text' name='name'></Field>

        <label>username :</label>
        <Field type='text' name='username'></Field>

        <label>email :</label>
        <Field type='email' name='email'></Field>

        <label>address :</label>
        <Field type='text' name='address'></Field>

        <input type='submit' value='submit'></input>
    </Form>
    </Formik>
  )
}
