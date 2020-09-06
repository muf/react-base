import React, { useState } from 'react';
import { SimpleCounterPresenter, SimpleCounterPresenterProps } from './SimpleCounterPresenter';
import { SimpleInputPresenter, SimpleInputPresenterProps } from './SimpleInputPresenter';
import converter from '../utils/converter';

export const HookTestContainer = () => {
    const [counter, setCounter] = useState<number>(0);
    const [input, setInput] = useState<string>("0");

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
    }

    return (
        <>
            <SimpleCounterPresenter {...presenterProps} />
            <SimpleInputPresenter {...inputPresenterProps} />
        </>
    )
}