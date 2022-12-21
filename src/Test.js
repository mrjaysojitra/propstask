import axios from 'axios'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'

export const Test = () => {
  return (
    <Formik initialValues={{
        userId: "",
        id: "",
        title: "",
        body: ""
    }}
    
    onSubmit={(e)=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",e)
        .then(y => {console.log(y)
        
        toast("Data save")
        }).catch(y=>{
            console.log(y)
            toast("Data Unsave")
        })


    }}
    >

    <Form>
        <label>userId:</label>
        <Field type='text' name='userId'></Field>

        <label>id:</label>
        <Field type='text' name='id'></Field>

        <label>title:</label>
        <Field type='text' name='title'></Field>

        <label>body:</label>
        <Field type='text' name='body'></Field><br/>

        <input type='submit' value='submit'></input>
    </Form>

    </Formik>
  )
}
