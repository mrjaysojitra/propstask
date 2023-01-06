import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducer/rootReducrer';
import  createSagaMiddleware from 'redux-saga'    
import thunk  from 'redux-thunk'
import rootSaga from '../Saga/rootSaga';



const sagamiddlewear = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagamiddlewear));


sagamiddlewear.run(rootSaga)

export default store;