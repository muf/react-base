import { all } from 'redux-saga/effects'
import loggerSaga from "./loggerSaga";
import requestSaga from "./requestSaga";

export default function* rootSaga() {
    console.log("rootsaga entered");

    yield all([
        loggerSaga()
        , requestSaga()
    ])
    // after side effects
}