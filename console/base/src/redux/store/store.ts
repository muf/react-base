import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {TestState, testStateReducer} from "../reducer/testStateReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../saga/rootSaga";

export type RootState = {
    testState: TestState
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        testState: testStateReducer
    })
    , composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);