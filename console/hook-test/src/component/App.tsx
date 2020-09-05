import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppLoadingPresenter} from "./AppLoadingPresenter";

/**
 * url 단위로 page 제공
 */
export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/loading" component={AppLoadingPresenter}/>
            </Switch>
        </BrowserRouter>
    );
};