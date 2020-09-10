import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HookTestContainer} from "./HookTestContainer";
import {MainPage} from "./MainPage";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {RootState} from "../index";

const useSaveLastHistoryState = (pathname: string, historyRef: any) => {
    useEffect(() => {
        console.log(`History Change: ${historyRef.current} -> ${pathname}`);
        historyRef.current = pathname; // 랜더링 이후 마지막 history값 저장
        return () => {
            console.log("this is umounted")
        }
    }, [pathname])
};
const useInitOnPathChange = (pathname: string, prevPathname: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (pathname?.includes('main')) {
            if (prevPathname !== pathname) {
                const callApi = async () => {
                    const result = await axios(
                        `http://localhost:3100/test?timeout=1000`
                    );
                };
                const callApi2 = async () => {
                    const result = await axios(
                        `http://localhost:3100/test?timeout=2000`
                    );
                    dispatch({type: 'test', payload: pathname})
                };
                const takeAll = async () => {
                    callApi();
                    callApi2();
                };

                takeAll();
            }

            dispatch({type: 'page', payload: pathname})
        }
    })
}

export const Service = () => {
    const history = useHistory();
    const pathname = history.location.pathname;
    const historyRef = useRef<string>();
    const historyCurrent = historyRef.current;
    const [count, setCount] = useState(0);
    const page = useSelector<RootState>(state => state.testState.page) as string;

    console.log("!!!! page", page)
    useSaveLastHistoryState(pathname, historyRef);
    useInitOnPathChange(pathname, historyRef);


    console.log("hash 변화도 반응한다")
    switch(true) {
        case page?.includes('main'): return <MainPage/>
        case page?.includes('hooktest'): return <HookTestContainer/>
        case page?.includes('none'): return <><div>아무곳또 아닙니다</div></>
        default: return <><div>아무곳또 아닙니다</div></>
    }
    // return (
    //         <Switch>
    //             <Route exact path="/a" component={() => <DummyPresenter label={"a"}/>}/>
    //             <Route exact path="/b" component={() => <DummyPresenter label={"b"}/>}/>
    //             <Route exact path="/hooktest" component={HookTestContainer}/>
    //             <Route exact path="/hooktest2" component={HookTestContainer}/>
    //             <Route exact path="/dashboard" component={() => <Dashboard/>}/>
    //             <Route exact path="/layout/*" component={() => <Layout/>}/>
    //             <Route exact path="/layout2/*" component={() => <Layout2/>}/>
    //             <Route exact path="/case1/*" component={() => <Layout2/>}/>
    //             <Route path={"/main"}>
    //                 <Route exact path="/main/1" component={() => <MainPage/>}/>
    //                 <Route exact path="/main/2" component={() => <MainPage/>}/>
    //             </Route>
    //             <Route exact path="/*" component={() => <>미구현 페이지</>}/>
    //         </Switch>
    // );
};