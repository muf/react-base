import React from 'react'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarMinimizer,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavDropdown,
    CSidebarNavItem,
    CSidebarNavTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {SideNavVisibility} from "../../../redux/reducer/sideNavReducer";

export const SideNavPresenter = (props: {
        isVisible: SideNavVisibility
        , items: any[]
        , onShowChange?: Function}
    ) => {

    return (
        <CSidebar
            show={props.isVisible}
            onShowChange={props.onShowChange}
        >
            <CSidebarBrand className="d-md-down-none" to="/">
                <CIcon
                    className="c-sidebar-brand-full"
                    name="logo-negative"
                    height={35}
                />
                <CIcon
                    className="c-sidebar-brand-minimized"
                    name="sygnet"
                    height={35}
                />
            </CSidebarBrand>
            <CSidebarNav>
                <CCreateElement
                    items={props.items}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                />
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none"/>
        </CSidebar>
    )
};
