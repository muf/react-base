import { all } from 'redux-saga/effects'
import loggerSaga from "./loggerSaga";

export default function* rootSaga() {
    console.log("rootsaga entered");

    yield all([
        loggerSaga()
    ])
    // after side effects
}