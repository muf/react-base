import React from 'react';
import {Route, Switch} from "react-router-dom";
import {DummyPresenter} from "../../Dummy/DummyPresenter";

export const Content = () => {
    return (
        <Switch>
            <Route exact path="/*" component={DummyPresenter}/>/>
        </Switch>
    )
};