import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {DummyPresenter} from "../../../Dummy/DummyPresenter";
import {HomeContainer} from "./HomeContainer";

export const HomeContentRouter = () => {
    return (
        <Switch>
            <Route exact path="/home" render={props => <HomeContainer />} />
            <Route exact path="/home/intro" component={DummyPresenter}/>
            <Route exact path="/home/auth" component={DummyPresenter}/>
            <Route exact path="/home/guide" component={DummyPresenter}/>
            <Route exact path="/*">
                <Redirect to="/home" />
            </Route>
        </Switch>
    )
};