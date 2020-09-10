import {takeEvery} from 'redux-saga/effects'
import {Action} from 'redux'

export default function* loggerSaga() {
    yield takeEvery('*', logger);
}
function* logger (action: Action) {
    console.log(`[logger] action: ${action.type}`)
}