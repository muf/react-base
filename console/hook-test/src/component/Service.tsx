import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DummyPresenter} from "./DummyPresenter";
import {HookTestContainer} from "./HookTestContainer";
import {HookTestContainer2} from "./HookTestContainer2";
import {Dashboard} from "./Dashboard";
import {Layout} from "./Layout";
import {Layout2} from "./Layout2";



export const Service = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/a" component={() => <DummyPresenter label={"a"}/>}/>
                <Route exact path="/b" component={() => <DummyPresenter label={"b"}/>}/>
                <Route exact path="/hooktest" component={() => <HookTestContainer/>}/>
                <Route exact path="/hooktest2" component={() => <HookTestContainer2/>}/>
                <Route exact path="/dashboard" component={() => <Dashboard/>}/>
                <Route exact path="/layout/*" component={() => <Layout/>}/>
                <Route exact path="/layout2/*" component={() => <Layout2/>}/>
                <Route exact path="/case1/*" component={() => <Layout2/>}/>
                <Route exact path="/*" component={() => <>미구현 페이지</>}/>
            </Switch>
        </BrowserRouter>
    );
};