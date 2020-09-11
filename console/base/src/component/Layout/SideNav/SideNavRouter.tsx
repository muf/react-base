import React from 'react';
import {Route, Switch} from "react-router-dom";
import {SideNav} from "./SideNav";

export const SideNavRouter = () => {
    return (
        <Switch>
            <Route path="/home" render={props => <SideNav {...props} key='home' page='home'/>} />
            <Route path="/service" render={props => <SideNav {...props} key='service' page='service'/>} />
        </Switch>
    )
};