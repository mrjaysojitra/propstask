import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* watchFetchPost() {
    yield takeLatest('FETCH_POSTS_REQUEST', workFetchPosts)
}


export function* workFetchPosts(){
    try{
        const uri = `https://reqres.in/api/users?page=2`
        const response = yield call(axios.get, uri)

        yield put({
            type: 'FETCH_POSTS_SUCCESS',
            payload: response.data
        });
    }    

        catch(error){

            yield put({
                type: 'FETCH_POSTS_FAILD',
                payload: error
            });

            console.log("Request Faild")

            }
           
    }
