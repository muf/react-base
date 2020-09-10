import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from "../../../redux/store/store";
import {SideNavState} from "../../../redux/reducer/sideNavReducer";
import {sideNavAction} from "../../../redux/action/Actions";
import {SideNavPresenter} from "./SideNavPresenter";

export const SideNav = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector<RootState, SideNavState>(state => state.sideNavState).isVisible;

    const onShowChange = (nextVisibility: boolean) => {
        dispatch(sideNavAction.actionCreator.updateVisibility(nextVisibility));
    };

    return <SideNavPresenter
        isVisible={isVisible}
        onShowChange={onShowChange}
    />
};
