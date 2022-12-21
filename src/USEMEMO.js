import React, { useMemo,useState } from 'react'

export const USEMEMO = (props) => {
    const [showmore, setshowmore] = useState(false)

    const trun = useMemo(()=>{
            return props.text.slice(0, 25)
            .concat("...");
    })

  return (
    <div>
        <p onClick={()=>{setshowmore(!showmore)}}>
        {showmore? props.text : trun}
        </p>
    </div>
  )
}
