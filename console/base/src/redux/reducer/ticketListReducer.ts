import {sideNavAction, ticketListAction} from "../action/Actions";
import {Action} from "redux"
import * as _ from "lodash";

export type TicketInfo = {
    id: number
    , service: string
    , ticket: string
    , template: string
}
export type Status = 'REQUESTED' | 'SUCCESS' | 'ERROR'

export type TicketListState = {
    ticketListStateMap: {
        [key: string]: TicketInfo
    }
    ticketListStatusMap: {
        [key: string]: Status
    }
}

const initState: TicketListState = {
    ticketListStateMap: {}
    , ticketListStatusMap: {}
};

const getStatusUpdatedState = (state: TicketListState, key: string, status: Status): TicketListState => {
    const copiedState =  _.cloneDeep(state);
    copiedState.ticketListStatusMap[key] = status;
    return copiedState;
};

export const ticketListReducer = (state = initState, action: Action): TicketListState => {
    switch(action.type) {
        case ticketListAction.type.TICKETLIST_UPDATE.REQUESTED:
            //@ts-ignore
            return getStatusUpdatedState(state, action!.payload, 'REQUESTED');
        case ticketListAction.type.TICKETLIST_UPDATE.SUCCESS:
            //@ts-ignore
            return getStatusUpdatedState(state, action!.payload, 'SUCCESS');
        case ticketListAction.type.TICKETLIST_UPDATE.ERROR:
            //@ts-ignore
            return getStatusUpdatedState(state, action!.payload, 'ERROR');
        default:
            return { ...state }
    }
};
