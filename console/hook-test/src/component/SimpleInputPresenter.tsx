import React from 'react';

export type SimpleInputPresenterProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SimpleInputPresenter = (props: SimpleInputPresenterProps) => {
    return (
        <>
            <div>
                <input value={props.value} onChange={props.onChange}/>
            </div>
        </>
    )
}
