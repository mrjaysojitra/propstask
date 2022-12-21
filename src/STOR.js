import React from 'react'


export const STOR = (props,index) => {
  return (
    <div>
        <table striped bordered hover>
          <tr>
            <th>{props.mystor.id}</th>
            <td>{props.mystor.name}</td>
            <td>{props.mystor.username}</td>
            <td>{props.mystor.email}</td>
            {/* <button onClick={(()=>{
              props.delete(index)
            })}>delete</button> */}
          </tr>
        </table>
    </div>
  )
}
