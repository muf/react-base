import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {DummyPresenter} from "../../../Dummy/DummyPresenter";

export const ServiceContentRouter = () => {
    return (
        <Switch>
            <Route path="/service" render={props => <DummyPresenter {...props} label={'service'}/>} />
        </Switch>
    )
};