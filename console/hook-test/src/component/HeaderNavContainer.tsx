import React, { useContext } from 'react'
import {SideBarContext}  from "../context/SideBarContext";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export type HeaderNavProps = {
  sidebarShow: true|false|'responsive'
  toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => any
  toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => any
}

export const HeaderNav2 = (props: HeaderNavProps) => {
  const {sidebarShow} = useContext(SideBarContext);

  const headerNavProps: HeaderNavProps = {
    sidebarShow: sidebarShow
    , toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => {
        // setSidebarShow(nextSidebarShow(sidebarShow, false))
    }
    , toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => {
        // setSidebarShow(nextSidebarShow(sidebarShow, true))
    }
  }
  // return <HeaderNav {...headerNavProps}/>;
  return <></>
}
