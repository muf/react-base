import {sideNavAction} from "../action/Actions";
import {Action} from "redux"

export type SideNavVisibility = '' | true | false | 'responsive'

export type SideNavState = {
    isVisible: SideNavVisibility
}

const initState: SideNavState = {
    isVisible: 'responsive'
};

export const sideNavReducer = (state = initState, action: Action): SideNavState => {
    switch(action.type) {
        case sideNavAction.type.SIDENAV_UPDATE_VISIBILITY:
            //@ts-ignore
            return { ...state, isVisible: action!.payload };
        default:
            return { ...state }
    }
};
