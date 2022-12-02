import React from "react";
import "./TABLE.css" ;

export const MYFORM = (props) => {
  return (
    <div>
      {props.all.map((value, index) => {
        return (
          <table>
            <tr>
              <td>{value.firstname}</td>
              <td>{value.lastname}</td>
              <td>{value.digree}</td>
              <td>{value.contactnumber}</td>
              <td>{value.city}</td>
              <button
                onClick={() => {
                  props.aditbutton(index);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  props.rebutton(index);
                }}
              >5
                Delete
              </button>
            </tr>
          </table>
        );
      })}
    </div>
  );
};
