import React from "react"
import { Customstate } from "./Customstate"

export const Apicustom = () => {

    const {loading,data} = Customstate("https://jsonplaceholder.typicode.com/posts")
    
  return (
    <div>
        {data.map((element)=>{
            return(
                <h6>{element.title}</h6>
            )
        })}
    </div>
  )
}
