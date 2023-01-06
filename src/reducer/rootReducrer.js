
import { combineReducers} from 'redux'
import counterReducer from './counterReducer'
import PostReducer from './PostReducer'
import userReducerapi from './userReducerapi'

export default  combineReducers({
    counter : counterReducer,
    user : userReducerapi,
    posts : PostReducer
}) 