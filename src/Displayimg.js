import React from "react";

export const Displayimg = (props) => {
  return (
    <div>
      <div className="col-3">
        <div className="Card">
          <img style={{ width: "400px"}} src={props.value.url}></img>
        </div>
      </div>
    </div>
  );
};
