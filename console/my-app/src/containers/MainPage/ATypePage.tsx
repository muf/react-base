import React from "react";
import MainPageWrapComp, {MainPageWrapCompProps} from "./MainPageWrapComp";
import {Link} from "react-router-dom";

export const ATypePage = () => {
    const contentComp = () => {
        return (
            <>
                <div> This is A Type Contents </div>
                <Link to={{pathname: "/b"}}> Link to BTypePage</Link>
            </>
        );
    };
    const mainPageWrapCompProps: MainPageWrapCompProps = {
        contentComp: contentComp
        , headerCompProps: {
            title: "A Type Page"
        }
    };

    return (
        <MainPageWrapComp {...mainPageWrapCompProps} />
    );
};