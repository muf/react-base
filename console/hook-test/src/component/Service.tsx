import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DummyPresenter} from "./DummyPresenter";
import {HookTestContainer} from "./HookTestContainer";
import {HookTestContainer2} from "./HookTestContainer2";


export const Service = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/a" component={() => <DummyPresenter label={"a"}/>}/>
                <Route exact path="/b" component={() => <DummyPresenter label={"b"}/>}/>
                <Route exact path="/hooktest" component={() => <HookTestContainer />}/>
                <Route exact path="/hooktest2" component={() => <HookTestContainer2 />}/>
                <Route exact path="/*" component={() => <>아무거나</>}/>
            </Switch>
        </BrowserRouter>
    );
};