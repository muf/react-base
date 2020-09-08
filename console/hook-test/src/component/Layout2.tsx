import React, { useState, useReducer, useContext } from 'react';

import {SideNav2} from "./SideNav2";
import items from '../common/data/_sideNav'
import {SideBarContext, SideBarContextProvider}  from "../context/SideBarContext";


export const Layout2 = () => {
    const {count} = useContext(SideBarContext);

    return (
        <SideBarContextProvider>
            <div className="c-app c-default-layout">
                <SideNav2 items={items}/>
                <div className="c-wrapper">
                    {/* <HeaderNav {...headerNavProps}/> */}
                    <div className="c-body">
                        hello world ${count}
                    </div>
                </div>
            </div>
        </SideBarContextProvider>
    )
}
