const initialState = {

    data: [],
    isLoadding: false,
    error: {}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FETCH_POSTS_SUCCESS':
    return { ...state, isLoadding : false, data: payload  }

    
  case 'FETCH_POSTS_FAILD':
    return { ...state, isLoadding : false, error  :payload }


  case 'FETCH_POSTS_REQUEST':
        return { ...state, isLoadding : true }
            
  default:
    return state
  }
}
