import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postSlice';


export const Post = () => {
    const {list, status} = useSelector(state => state.post);
    const dispatch = useDispatch();

    console.log(list)

    useEffect(()=>{
        dispatch(getPosts({userId: 1}))
    },[dispatch])

    if (status === 'loading') {
        return <div>Loading.....</div>;
      }
  return (
    <div>
            {list?.map((item)=>{
                return(
                    <div>
                        <h5>{item.title}</h5>
                    </div>
                )
            })}
        
    </div>
  )
}
