import { getUserListFailure, getUserListStarted, getUserListSuccess } from "./action";

export const Pluse2 = (payload) => ({
  type: "PLUSE2",
  payload
})

export const Minus2 = (payload) => ({
  type: "MINUS2",
  payload
})

export const getUserListStarted = (payload) => ({
  type: 'Started2',
  payload
})

export const getUserListSuccess = (payload) => ({
    type: 'Success2',
    payload
  })
  
  export const getUserListFailure = (payload) => ({
    type: 'Failure2',
    payload
  })
  


export const asyncMinus2 = num => {
   return dispatch => {
    setTimeout(()=>{
        dispatch({
            type: "MINUS2COUNTER",
            payload: num
        });
    },1000)
   };
}

export const getUserList = (page =1 )=> async dispatch => {
    dispatch(getUserListStarted());
    try{
        const res = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await res.json();
        dispatch(getUserListSuccess(data))
    } catch (err) {
        dispatch(getUserListFailure(err.message));
    }
}
