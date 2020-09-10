import React from 'react';
import {useDispatch} from "react-redux";
import {testAction} from "../../redux/action/Actions";

export const DummyPresenter = () => {
    const dispatch = useDispatch();

    const click = () => {
        console.log("click");
        dispatch(testAction.ac.update(3));
    };

    return (
      <>
          <div> 미구현 페이지 입니다. </div>
          <button onClick={click}> click </button>
      </>
    );
};