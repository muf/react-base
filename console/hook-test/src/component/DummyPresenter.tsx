import React from 'react';
/**
 * 표시할 내용을 입력 받아서 그려주는 
 * type: Presenter
 * input: {label:string}
 * 
 */
 
export type DummyPresenterProps = {
    label: string
}

export const DummyPresenter = (props: DummyPresenterProps) => {
      return (
        <>
            <div> Dummy Presenter. </div>
            <div> label: {props.label} </div>
        </>
    )
}
