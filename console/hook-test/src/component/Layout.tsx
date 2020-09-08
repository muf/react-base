import React, { useState, useEffect, useMemo } from 'react';

import {SideNav} from "./SideNav";
import items from '../common/data/_sideNav'
import {HeaderNav, HeaderNavProps} from "./HeaderNav";
import { useHistory } from 'react-router-dom';


import {SidebarShowType}  from "../context/SideBarContext";

const useTest = (sidebarShow: any) => {
    useEffect(() => {
        console.log(`yes: ${sidebarShow}`)
    }, [sidebarShow])
}

export const Layout = () => {
    const [sidebarShow, setSidebarShow] = useState<SidebarShowType>('responsive');
    const headerNavProps: HeaderNavProps = createHeaderNavProps(sidebarShow, setSidebarShow);
    const history = useHistory();
    useTest(sidebarShow)

    console.log("layout called: ", history)
    useMemo(() => {
        console.log("history change")
    }, [history])

    return (
        <div className="c-app c-default-layout">
            <SideNav show={sidebarShow} items={items}/>
            <div className="c-wrapper">
                <HeaderNav {...headerNavProps}/>
                <div className="c-body">
                    hello world
                </div>
            </div>
        </div>
    )
}

const createHeaderNavProps = (sidebarShow: SidebarShowType, setSidebarShow: React.Dispatch<React.SetStateAction<SidebarShowType>>): HeaderNavProps => {
    return {
        sidebarShow: sidebarShow
        , toggleSidebar: (e:React.MouseEvent<HTMLButtonElement>) => {
            setSidebarShow(nextSidebarShow(sidebarShow, false))
        }
        , toggleSidebarMobile: (e:React.MouseEvent<HTMLButtonElement>) => {
            setSidebarShow(nextSidebarShow(sidebarShow, true))
        }
    }
}

const nextSidebarShow = (sidebarShow: SidebarShowType, isMobile: boolean) => {
    return [!isMobile, 'responsive'].includes(sidebarShow) ? isMobile : 'responsive'
}