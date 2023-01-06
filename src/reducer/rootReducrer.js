
import { combineReducers} from 'redux'
import counterReducer from './counterReducer'
import userReducerapi from './userReducerapi'

export default  combineReducers({
    counter : counterReducer,
    user : userReducerapi
    
}) 