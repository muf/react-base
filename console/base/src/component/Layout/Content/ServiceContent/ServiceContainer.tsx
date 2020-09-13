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

    console.log(ticketListState)
    const list = ticketListState.ticketListStateMap[serviceIndicator];
    const status = ticketListState.ticketListStatusMap[serviceIndicator];

    return (
        isError(status) ? <Error/> : (
            isLoading(status) ? <Loading/> : (
                <>
                    {
                        list.map((item) => {
                            return (
                                <div key={item.id}>
                                    { item.template  }
                                </div>
                            );
                        })
                    }
                </>
            )
        )
    );
};

const isLoading = (status: Status) => !['SUCCESS'].includes(status);
const isError   = (status: Status) => ['ERROR'].includes(status);
const Loading = () => {
    return (
        <>
            로딩중.....
        </>
    )
};
const Error = () => {
    return (
        <>
            에러 발생.....
        </>
    )
};
