import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store/store";
import {Status, TicketListState} from "../../../../redux/reducer/ticketListReducer";
import {pageHistoryUtil} from "../../../../common/pageHistoryUtil";
import {useHistory} from 'react-router-dom';
import {ticketListAction} from "../../../../redux/action/Actions";

export const ServiceContainer = () => {
    const serviceIndicator = pageHistoryUtil.getServiceIndicator();
    const ticketListState = useSelector<RootState, TicketListState>(state => state.ticketListState);
    useListLoadOnHistoryChanged();

    console.log(ticketListState);
    const list = ticketListState.ticketListStateMap[serviceIndicator];
    const status = ticketListState.ticketListStatusMap[serviceIndicator];

    return isLoading ? <Loading/> : (
        <>
            123
        </>
    );
};

const useListLoadOnHistoryChanged = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const serviceIndicator = pageHistoryUtil.getServiceIndicator();

    useEffect(() => {
        console.log("history changed");
        dispatch({type: ticketListAction.type.TICKETLIST_UPDATE.REQUESTED, payload: serviceIndicator});
    }, [history]);
};

const isLoading = (status: Status) => ['REQUESTED', undefined].includes(status);

const Loading = () => {
    return (
        <>
            로딩중.....
        </>
    )
};
