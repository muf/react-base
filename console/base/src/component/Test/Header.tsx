import React from 'react'
import {CHeader, CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CToggler,} from '@coreui/react'
import CIcon from '@coreui/icons-react'

type Props = {
    sidebarShow: true|false|'responsive'
    toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => any
    toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => any
}
export const HeaderNav = () => {
    const props: Props = {
        sidebarShow: true
        , toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => {console.log("toogle")}
        , toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => {console.log("m")}
    };

    return <HeaderPresenter {...props} />
};

const HeaderPresenter = (props: Props) => {
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
                <CHeaderNavItem className="px-3" >
                    <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem  className="px-3">
                    <CHeaderNavLink to="/users">Users</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/settings">Settings</CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>
        </CHeader>
    )
}