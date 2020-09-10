import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../saga/rootSaga";
import {sideNavReducer, SideNavState} from "../reducer/sideNavReducer";

export type RootState = {
    sideNavState: SideNavState
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        sideNavState: sideNavReducer
    })
    , composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);