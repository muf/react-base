import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SimpleCounterPresenter, SimpleCounterPresenterProps} from './SimpleCounterPresenter';
import {SimpleInputPresenter, SimpleInputPresenterProps} from './SimpleInputPresenter';
import converter from '../utils/converter';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store/rootStore";
import {counterSlice, CounterState, incrementAsync} from "../redux/reducer/counterSlice";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const HookTestContainer = () => {
    const counter = (useSelector<RootState>(state => state.counter) as CounterState).value;
    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState<string>("0");
    const { increment, decrement, incrementByAmount } = counterSlice.actions;
    const current = useRef();
    // const inputRef = useRef<HTMLInputElement>(null);

    const testRef1 = useRef(1);
    const testRef2 = useRef(1);
    // console.log(inputRef);
    // console.log(inputRef.current?.value);

    useEffect(() => {
        console.log("@@@@@@@@@@@@@@@@@@@ 초기화", history.location.pathname)
        return () => {
            console.log("##### unmount", history.location.pathname)
        }

    }, [])
    const inputRef = useCallback((node) => {
        console.log(testRef2.current)
        console.log("callback")
        if (node !== null) {
            console.log(node)
        }
    }, []);
    
    const presenterProps: SimpleCounterPresenterProps = {
        counter
        , counterLabel: "increase"
        , setCounter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            dispatch(increment(converter.stringToNumber(input, 0)));
        }
        , isButtonDisable: false
    }

    const inputPresenterProps: SimpleInputPresenterProps = {
        value: input
        , onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.currentTarget.value)
        }
        , inputRef: inputRef
    }

    const CondComp = useMemo(() => {
        console.log(`counter 변화 -> version: ${testRef2.current}`)
        return (
            <>
                <div> input 변화: counter: {counter}</div>
            </>
        )
    }, [counter]);

    const [data, setData] = useState({ hits: [] });
 
    //@ts-ignore
    useEffect(() => {
        console.log(testRef2.current, ' @@ api call')
        const callApi = async () => {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux'+counter,
            )
            // console.log(result.data.hits[0].objectID)
            // setData(result.data);
        };
        counter !== 0 && callApi();
    }, [counter]);
    //@ts-ignore
    console.log(`현재 상태: ${current.current?.history}`)
    useEffect(() => {
        //@ts-ignore
        current.current = {history: history.location.pathname}
    });

    // 이런식으로 체크 가능
    const wak = input.length >= 3;
    useEffect(() => {
        console.log("*** special check. length changed")
    }, [wak])
    
    useEffect(() => {
        // console.log(testRef2.current)
        // console.log('counter: ', counter)
        // console.log("effect1", counter)
        // console.log(testRef1.current)
        // console.log(testRef2.current)
        if(counter % 2 == 0) {
            testRef1.current = testRef1.current + 1;
        }
        testRef2.current = testRef2.current + 1
    })
    const onClick = () => {
        dispatch(incrementAsync(100));
        history.goBack()
    }
    useEffect(() => {
        // goback에 의한게 여기까지 오는지? 랜더 이후 실행인데 랜더가 안되니 안올거 같은데?
        console.log('!!!!history changed')
        console.log(history.location.pathname)
    }, [history]);
    return (
        <>
            <SimpleCounterPresenter {...presenterProps} />
            <SimpleInputPresenter {...inputPresenterProps} />
            {CondComp}
            <Link to={{pathname: '/hooktest'}}> go to v1</Link>
            <Link to={{pathname: '/hooktest2'}}> go to v2</Link>
            <button onClick={onClick}> async and go back </button>
        </>
    )
}