import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store/store";
import {SideNavState} from "../../../redux/reducer/sideNavReducer";
import {sideNavAction} from "../../../redux/action/Actions";
import React, {useState} from "react";
import {HeaderNavPresenter} from "./HeaderNavPresenter";

// 데이터를 어디서 어떻게 조회할 지, View에 어떤 기능을 부여할지 등을 Container 컴포넌트에 구현한다.
export const HeaderNav = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector<RootState, SideNavState>(state => state.sideNavState).isVisible;

    const toggleSidebar = () => {
        const nextVisibility = [true, 'responsive'].includes(isVisible) ? false : 'responsive';
        dispatch(sideNavAction.actionCreator.updateVisibility(nextVisibility));
    };

    const toggleSidebarMobile = () => {
        const nextVisibility = [false, 'responsive'].includes(isVisible) ? true : 'responsive';
        dispatch(sideNavAction.actionCreator.updateVisibility(nextVisibility));
    };

    return <HeaderNavPresenter
        toggleSidebar={toggleSidebar}
        toggleSidebarMobile={toggleSidebarMobile}
    />
};
