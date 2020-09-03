import React from 'react';

import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import {ATypePage} from "../MainPage/ATypePage";
import {BTypePage} from "../MainPage/BTypePage";
import MainPageWrapComp, {MainPageWrapCompProps} from "../MainPage/MainPageWrapComp";

function App() {
    const AcontentComp = () => {
        return (
            <div>
                <span> b type </span>
                <a> This is A Type Contents </a>
                <Link to={{pathname: "/b2"}}> Link to ATypePage</Link>
            </div>
        );
    };
    const AmainPageWrapCompProps: MainPageWrapCompProps = {
        contentComp: AcontentComp
        , headerCompProps: {
            title: "B Type Page"
        }
    };
    const BcontentComp = () => {
        return (
            <>
                <div> This is A Type Contents </div>
                <Link to={{pathname: "/a2"}}> Link to BTypePage</Link>
            </>
        );
    };
    const BmainPageWrapCompProps: MainPageWrapCompProps = {
        contentComp: BcontentComp
        , headerCompProps: {
            title: "A Type Page"
        }
    };
  return (
        <Switch>
            <Route exact path="/a" component={ATypePage}/>
            <Route exact path="/b" component={BTypePage}/>
            <Route exact path="/a2" render={(rProps) => (
                <MainPageWrapComp {...rProps} {...AmainPageWrapCompProps}>
                    {AcontentComp()}
                </MainPageWrapComp>)} />
            <Route exact path="/b2" render={(rProps) => (
                <MainPageWrapComp {...rProps} {...BmainPageWrapCompProps}>
                    {BcontentComp()}
                </MainPageWrapComp>)} />
            {/*<Route exact path="/b2" render={(rProps) => (<MainPageWrapComp {...rProps} {...BmainPageWrapCompProps}/>)} />*/}
        </Switch>
  );
}

export default App;
