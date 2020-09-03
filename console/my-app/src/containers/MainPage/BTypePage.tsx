import React, {useEffect} from "react";
import MainPageWrapComp , {MainPageWrapCompProps} from "./MainPageWrapComp";
import {Link} from "react-router-dom";

export const BTypePage = () => {
    const contentComp = () => {
        return (
            <div>
                <span> b type </span>
                <a> This is A Type Contents </a>
                <Link to={{pathname: "/a"}}> Link to ATypePage</Link>
            </div>
        );
    };
    const mainPageWrapCompProps: MainPageWrapCompProps = {
        contentComp: contentComp
        , headerCompProps: {
            title: "B Type Page"
        }
    };

    return (
        <MainPageWrapComp {...mainPageWrapCompProps} />
    );
};