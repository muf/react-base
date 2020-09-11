import React from 'react';

import {CHeader, CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CToggler,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {ServiceSelector} from "./ServiceSelector.jsx";

type Props = {
    toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => any
    toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => any
}

export const HeaderNavPresenter = (props: Props) => {
    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={props.toggleSidebarMobile}
            />
            <CToggler
                inHeader
                className="ml-3 d-md-down-none"
                onClick={props.toggleSidebar}
            />
            <CHeaderBrand className="mx-auto d-lg-none" to="/">
                <CIcon name="logo" height="48" alt="Logo"/>
            </CHeaderBrand>
            <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to='/home'>Home</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <ServiceSelector />
                </CHeaderNavItem>
            </CHeaderNav>
        </CHeader>
    )
};