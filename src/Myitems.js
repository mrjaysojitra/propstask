import React from 'react'

 const Myitems = (sdata,removedata, index) => {
    console.log("xyz",sdata)
  return (
    <div>
        Myitems
        <button onClick={()=>{
            removedata(index)
        }}>Delete</button>
    </div>
  )
}

export default React.memo(Myitems);