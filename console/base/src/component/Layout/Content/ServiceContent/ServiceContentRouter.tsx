import React, {useEffect} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import {DummyPresenter} from "../../../Dummy/DummyPresenter";
import {DoubleBarrelTest} from "./DoubleBarrelTest";
import {useDispatch} from "react-redux";
import {pageHistoryUtil} from "../../../../common/pageHistoryUtil";
import {commonAction, ticketListAction} from "../../../../redux/action/Actions";

export const ServiceContentRouter = () => {
    useListLoadOnHistoryChanged();

    return (
        <Switch>
            <Route exact path="/service" component={DoubleBarrelTest} />
            <Route path="/service" render={props => <DummyPresenter {...props} label={'service'}/>} />
        </Switch>
    )
};

const useListLoadOnHistoryChanged = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // dispatch({type: ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, payload: serviceIndicator});
        dispatch({type: commonAction.type.URL_CHANGED, payload: {
            pathname:  history.location.pathname
            , search: history.location.search
        }});
    }, [history]);
};