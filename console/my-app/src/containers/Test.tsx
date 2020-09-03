import React from "react";
import {useSelector} from "react-redux";
import {selectCount} from "./counter/counterSlice";

export const Test = () => {
    // const count = useSelector(selectCount);

    console.log(`Test`)
    return (
        <>
            <div>
                <span>This is a test</span>
                {/*<span>${count}</span>*/}
            </div>
        </>
    )
};