import React from 'react';
import {SideNav} from "./SideNav/SideNav";
import {HeaderNav} from "./Header/HeaderNav";
import {Content} from "./Content/Content";
import {FooterNav} from "./FooterNav/FooterNav";

export const LayoutPresenter = () => {
    return (
        <div className="c-app c-default-layout">
            <SideNav/>
            <div className="c-wrapper">
                <HeaderNav/>
                <div className="c-body">
                    <Content/>
                </div>
                <FooterNav/>
            </div>
        </div>
    )
};
