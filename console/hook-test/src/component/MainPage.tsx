import React, {useMemo} from 'react';
import {ListContainer} from "./ListContainer";
import {Link} from "react-router-dom";


export const MainPage = () => {
    return (
        <>
            <div><Link to={{pathname: '/main/1'}}> go to v1</Link></div>
            <div><Link to={{pathname: '/main/2'}}> go to v2</Link></div>
            <div>
                <Link
                    to={{
                        pathname: "/main/2",
                        hash: "#the-hash"
                    }}
                >
                    hash
                </Link>
            </div>
            <ListContainer/>
        </>
    )
}
