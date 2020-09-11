import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from "../../../redux/store/store";
import {SideNavState} from "../../../redux/reducer/sideNavReducer";
import {sideNavAction} from "../../../redux/action/Actions";
import {SideNavPresenter} from "./SideNavPresenter";
import serviceNavItems from "./serviceNavItems";
import homeNavItems from "./homeNavItems";

const getItem = (page: string): any[]|null => {
    switch(page) {
        case 'home':
            return homeNavItems();
        case 'service':
            return serviceNavItems();
        default:
            return null;
    }
};

export const SideNav = (props: {page: string}) => {
    const dispatch = useDispatch();
    const isVisible = useSelector<RootState, SideNavState>(state => state.sideNavState).isVisible;
    const items = getItem(props.page);

    const onShowChange = (nextVisibility: boolean) => {
        dispatch(sideNavAction.actionCreator.updateVisibility(nextVisibility));
    };

    return items == null? (
        <>
            <div> (구현 예정) 페이지 로딩중 </div>
        </>
    ) : (
        // 변경되는 뷰 부분만 데이터로 전달 (slot 패턴)
        <SideNavPresenter
            items={items}
            isVisible={isVisible}
            onShowChange={onShowChange}
        />
    )
};
