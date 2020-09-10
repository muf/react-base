import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store/store";
import {SideNavState} from "../../../redux/reducer/sideNavReducer";
import {sideNavAction} from "../../../redux/action/Actions";
import React from "react";
import {HeaderNavPresenter} from "./HeaderNavPresenter";

export const HeaderNav = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector<RootState, SideNavState>(state => state.sideNavState).isVisible;

    const toggleSidebar = () => {
        const nextVisibility = [true, 'responsive'].includes(isVisible) ? false : 'responsive';
        dispatch(sideNavAction.actionCreator.updateVisibility(nextVisibility));
    };

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(isVisible) ? true : 'responsive';
        dispatch({type: 'set', sidebarShow: val})
    };

    return <HeaderNavPresenter
        toggleSidebar={toggleSidebar}
        toggleSidebarMobile={toggleSidebarMobile}
    />
};
