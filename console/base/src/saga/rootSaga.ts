import { all } from 'redux-saga/effects'
import loggerSaga from "./loggerSaga";
import requestSaga from "./requestSaga";
import refreshSaga from "./refreshSaga";

export default function* rootSaga() {
    console.log("rootsaga called!");
    yield all([
        loggerSaga()
        , refreshSaga()
        , requestSaga()
    ]);
}