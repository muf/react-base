import {takeEvery, takeLatest, call} from 'redux-saga/effects';
import {CommonAction, ticketListAction} from "../redux/action/Actions";
import {getRequest} from "../common/api/apiUtil";
import {apiResource} from "../common/api/apiResource";

export default function* requestSaga() {
    // takeLatest: 중간에 다른게 들어오면 도중에 멈추고 마지막 것으로 다시 수행
    yield takeLatest(ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, fetchTicketList);
}

function* fetchTicketList (action: CommonAction<any>) {
    console.log("[fetchTicketList] @@@@");
    const response = yield call(getRequest(apiResource().getTicketList(action.payload, 2000)));
    console.log(response);
}