import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./component/App";
import {Provider} from 'react-redux';
import {Action, combineReducers, compose, createStore, Middleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from "redux-devtools-extension";

type TestState = {
    page: string
    id: number
}

type PayLoadedAction = {
    payload: {}
} & Action

const testStateReducer = (state: TestState = {page: 'none', id: 0}, action: PayLoadedAction): TestState => {
    switch(action.type) {
        //@ts-ignore
        case 'test':
            console.log("test passed")
            //@ts-ignore
            return {...state, id: action!.payload};
        //@ts-ignore
        case 'page':
            console.log("test passed")
            //@ts-ignore
            return {...state, page: action!.payload};
        default: return {...state}
    }
};

export type RootState = {
    testState: TestState
};

const createRootReducer = () => {
    return combineReducers({
        testState: testStateReducer
    });
};

const configureStore = () => {
    return createStore(createRootReducer(), composeWithDevTools());
};

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
