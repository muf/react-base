import React from 'react';

import {CHeader, CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CToggler,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import menuList from './headerNavMenu';

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
                {
                    Array.from(menuList).map((menu) => {
                        return (
                            <CHeaderNavItem className="px-3" key={menu.label}>
                                <CHeaderNavLink to={menu.to}>{menu.label}</CHeaderNavLink>
                            </CHeaderNavItem>
                        )
                    })
                }
            </CHeaderNav>
        </CHeader>
    )
};