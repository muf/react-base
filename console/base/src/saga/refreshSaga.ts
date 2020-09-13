import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {commonAction, CommonAction, ticketListAction} from "../redux/action/Actions";
import {getRequest} from "../common/api/apiUtil";
import {apiResource} from "../common/api/apiResource";

export default function* refreshSaga() {
    yield takeEvery(commonAction.type.URL_CHANGED, onRefresh);
}

function* onRefresh (action: CommonAction<any>) {
    const pathname = action.payload.pathname;
    const search = action.payload.search;
    const service = new URLSearchParams(search).get('service');

    yield put({type: ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, payload: service});
}