import  {all}  from 'redux-saga/effects'
import { incrementWatcher, dicrementWatcher, MultiementWatcher, DivisionWatcher } from './counterSaga'
import { workFetchPosts } from './PostSaga'



export default function* rootSaga()
{
    yield all ([incrementWatcher(), dicrementWatcher(), MultiementWatcher(), DivisionWatcher(), workFetchPosts() ])
   
}