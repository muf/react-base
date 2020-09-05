import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Service } from './Service';
import { AppLoadingPresenter } from './AppLoadingPresenter';

/**
 * url 단위로 page 제공
 */
export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={AppLoadingPresenter}/>
                <Route exact path="/*" component={Service}/>
            </Switch>
        </BrowserRouter>
    );
};