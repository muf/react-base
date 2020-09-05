import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DummyPresenter} from "./DummyPresenter";


export const Service = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/a" component={() => <DummyPresenter label={"a"}/>}/>
                {/*<Route exact path="/b" component={() => <DummyPresenter label={"b"}/>}/>*/}
                <Route exact path="/*" component={() => <>아무거나</>}/>
            </Switch>
        </BrowserRouter>
    );
};