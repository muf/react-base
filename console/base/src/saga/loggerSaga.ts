import { takeLatest, takeEvery } from 'redux-saga/effects';
import {CommonAction} from "../redux/action/Actions";

export default function* loggerSaga() {
    // takeLatest: 중간에 다른게 들어오면 도중에 멈추고 마지막 것으로 다시 수행
    yield takeEvery('*', logger);
}
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* logger (action: CommonAction<any>) {
    console.log(`[logger] action: ${action.type} / payload: ${action.payload}`);
    yield delay(2000);
    console.log('delay effect')
}