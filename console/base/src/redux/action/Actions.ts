import {SideNavVisibility} from "../reducer/sideNavReducer";

/**
 * Action Type들을 하나의 파일에 명시
 * (많아질 경우 별도 분리)
 */

export type CommonAction<P> = {
    type: string
    payload: P
}

const asyncActionType = (prefix: string) => ({
    REQUESTED: `${prefix}_REQUESTED`
    , SUCCESS: `${prefix}_SUCCESS`
    , ERROR: `${prefix}_ERROR`
});

export const sideNavAction = {
    type: {
        SIDENAV_UPDATE_VISIBILITY: 'SIDENAV_UPDATE_VISIBILITY'
    }
    , actionCreator: {
        updateVisibility: (isVisible: SideNavVisibility): CommonAction<SideNavVisibility> => {
            return { type: sideNavAction.type.SIDENAV_UPDATE_VISIBILITY, payload: isVisible }
        }
    }
};