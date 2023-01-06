const initialState = {}

export default (state = 0, { type, payload }) => {
  switch (type) {

  case 'Plus':
    return state+1;
  
  case 'Minus':
  return state-1;  

  case 'Multi':
  return state *2;  

  case 'Div':
  return state /2;  

  case 'Minuscounter':
  return  state - payload

  default:
    return state
  }
}
