export const Plus = (payload) => ({
    type: "Plus",
    payload
})


export const Minus = (payload) => ({
  type: "Minus",
  payload
})

export const getUserListStarted  = (payload) => ({
  type: 'Started',
  payload
})

export const getUserListSuccess = (payload) => ({
  type: 'Success',
  payload
})

export const getUserListFailure = (payload) => ({
  type: 'Failure',
  payload
})


export const asncMinus = num => {
  return dispatch => {
    setTimeout(()=>{
      dispatch({
        type: "Minuscounter",
        payload: num
      });
    },1000)
  };
};

export const getUserList = (page =1 )=> async dispatch => {
  dispatch(getUserListStarted());
  try {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();
    dispatch(getUserListSuccess(data));
  } catch (err) {
    dispatch(getUserListFailure(err.message));
  }
}