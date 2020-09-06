import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { SimpleCounterPresenter, SimpleCounterPresenterProps } from './SimpleCounterPresenter';
import { SimpleInputPresenter, SimpleInputPresenterProps } from './SimpleInputPresenter';
import converter from '../utils/converter';
import axios from "axios";

export const HookTestContainer = () => {
    const [counter, setCounter] = useState<number>(0);
    const [input, setInput] = useState<string>("0");
    // const inputRef = useRef<HTMLInputElement>(null);

    const testRef1 = useRef(1);
    const testRef2 = useRef(1);
    // console.log(inputRef);
    // console.log(inputRef.current?.value);

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
            setCounter(state => state + converter.stringToNumber(input, 0));
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
        console.log(testRef2.current)
        console.log(`CondComp`)
        return (
            <>
                <div> input 변화: counter: {counter}</div>
            </>
        )
    }, [counter]);

    const [data, setData] = useState({ hits: [] });
 
    //@ts-ignore
    useEffect(() => {
        console.log(testRef2.current)
        const callApi = async () => {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux'+counter,
            )
            console.log(result.data.hits[0].objectID)
            // setData(result.data);
        };
        counter !== 0 && callApi();
    }, [counter]); 

    useEffect(() => {
        console.log(testRef2.current, 'wait for [previous hook. is it blocking? i dont think so..? but it makes sense/ this is nonblocking')
    })
    
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
    return (
        <>
            <SimpleCounterPresenter {...presenterProps} />
            <SimpleInputPresenter {...inputPresenterProps} />
            {CondComp}
        </>
    )
}