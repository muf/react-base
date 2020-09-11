import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HomeContentRouter} from "./HomeContent/HomeContentRouter";
import {ServiceContentRouter} from "./ServiceContent/ServiceContentRouter";
import {CContainer} from '@coreui/react'

export const ContentRouter = () => {
    return (
        <main className="c-main">
            <CContainer fluid>
                <Switch>
                    <Route path="/service" component={ServiceContentRouter}/>
                    <Route path="/home" component={HomeContentRouter}/>
                    <Route path="/*" component={HomeContentRouter}/>
                </Switch>
            </CContainer>
        </main>
    )
};