import { delay, put, takeEvery } from 'redux-saga/effects'

export function* incWorker(){

    yield delay(1000);
    yield put({type: 'Plus'})

} 

export function* incrementWatcher(){
    yield takeEvery('INCREMENT',incWorker)

 
}


export function* dicWorker(){
    
    yield delay(1000);
    yield put({type: 'Minus'})
}

export function* dicrementWatcher(){

    yield takeEvery('DICRIMENTM',dicWorker)
}


export function* MultiWorker(){
    
    yield delay(1000);
    yield put({type: 'Multi'})
}


export function* MultiementWatcher(){

    yield takeEvery('MULTIMENT',MultiWorker)
}

export function* DivWorker(){
    
    yield delay(1000);
    yield put({type: 'Div'})
}


export function* DivisionWatcher(){

    yield takeEvery('DIVISION',DivWorker)
}




