import { takeEvery } from 'redux-saga';

function* mySaga(action) {
    console.log('mySaga'); 
    console.log(action);
}

function* watchMySaga() {
    yield* takeEvery('counter/increment', mySaga);
}

export default watchMySaga;
