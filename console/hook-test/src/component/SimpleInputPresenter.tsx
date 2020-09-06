import React from 'react';

export type SimpleInputPresenterProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputRef: any
    // React.RefObject<HTMLInputElement>
}

export const SimpleInputPresenter = (props: SimpleInputPresenterProps) => {
    return (
        <>
            <div>
                {/* <input ref={props.inputRef}/> */}
                <input value={props.value} onChange={props.onChange}/>
            </div>
        </>
    )
}
