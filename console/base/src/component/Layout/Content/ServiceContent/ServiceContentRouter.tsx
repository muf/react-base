import React from 'react';
import {Route, Switch} from "react-router-dom";
import {DummyPresenter} from "../../../Dummy/DummyPresenter";
import {ServiceContainer} from "./ServiceContainer";

export const ServiceContentRouter = () => {
    return (
        <Switch>
            <Route exact path="/service" component={ServiceContainer} />
            <Route path="/service" render={props => <DummyPresenter {...props} label={'service'}/>} />
        </Switch>
    )
};