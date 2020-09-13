import {call, takeEvery} from 'redux-saga/effects';
import {CommonAction} from "../redux/action/Actions";

export default function* loggerSaga() {
    yield takeEvery('*', logger);
}

function* logger (action: CommonAction<any>) {
    yield call(() => console.log(`[logger] action: ${action.type} / payload: ${action.payload}`));
}
