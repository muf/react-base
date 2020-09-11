import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../saga/rootSaga";
import {sideNavReducer, SideNavState} from "../reducer/sideNavReducer";
import {ticketListReducer, TicketListState} from "../reducer/ticketListReducer";

export type RootState = {
    sideNavState: SideNavState
    ticketListState: TicketListState
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        sideNavState: sideNavReducer
        , ticketListState: ticketListReducer
    })
    , composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);