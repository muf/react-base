import React from 'react';
import {HeaderNav} from "./Header/HeaderNav";
import {ContentRouter} from "./Content/ContentRouter";
import {FooterNav} from "./FooterNav/FooterNav";
import {SideNavRouter} from "./SideNav/SideNavRouter";

export const LayoutPresenter = () => {
    return (
        <div className="c-app c-default-layout">
            <SideNavRouter/>
            <div className="c-wrapper">
                <HeaderNav/>
                <div className="c-body">
                    <ContentRouter/>
                </div>
                <FooterNav/>
            </div>
        </div>
    )
};
