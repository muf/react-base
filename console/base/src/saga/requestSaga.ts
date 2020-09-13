import {takeEvery, takeLatest, call, all, put} from 'redux-saga/effects';
import {CommonAction, ticketListAction} from "../redux/action/Actions";
import {getRequest} from "../common/api/apiUtil";
import {apiResource} from "../common/api/apiResource";

export default function* requestSaga() {
    yield takeEvery(ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, fetchTicketList);
}

function* fetchTicketList (action: CommonAction<any>) {
    try {
        const response = yield call(getRequest(apiResource().getTicketList(action.payload, 2000)));
        yield put({type: ticketListAction.type.TICKETLIST_UPDATE.SUCCESS, payload: {
            key: action.payload
            , list: response.data.ticketList
        }});
        //@ts-ignore
        yield put([
            {type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload}
            , {type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload}
            , {type: ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, payload: action.payload}
        ])
        //
        // yield all([
        //     call(getRequest(apiResource().getTicketList(action.payload, 2000)))
        //     , call(getRequest(apiResource().getTicketList(action.payload, 2000)))
        //     , call(getRequest(apiResource().getTicketList(action.payload, 2000)))
        //     , put({type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload})
        //     , put({type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload})
        //     , put({type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload})
        // ]);

    } catch (e) {
        yield put({type: ticketListAction.type.TICKETLIST_UPDATE.ERROR, payload: action.payload});
    }
}