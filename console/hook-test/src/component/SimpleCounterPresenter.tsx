import React from 'react';

export type SimpleCounterPresenterProps = {
    counter: number
    counterLabel: string
    setCounter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isButtonDisable: boolean
}

export const SimpleCounterPresenter = (props: SimpleCounterPresenterProps) => {
    return (
        <>
            <div> Counter: {props.counter} </div>
            <div> 
                <button
                    aria-disabled={props.isButtonDisable}
                    onClick={props.setCounter}>
                    {props.counterLabel}
                </button>
            </div>
        </>
    )
}
