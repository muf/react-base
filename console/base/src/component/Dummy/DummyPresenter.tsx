import React from 'react';
import { useHistory } from 'react-router-dom';

export const DummyPresenter = (props: {label: string}) => {
    const history = useHistory();

    return (
      <>
          <div> [{props.label}]미구현 페이지 입니다. {history.location.pathname} </div>
      </>
    );
};