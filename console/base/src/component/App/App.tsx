import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {DummyPresenter} from "../Dummy/DummyPresenter";
import {HeaderNav} from "../Test/Header";
/**
 * url 단위로 page 제공
 */
export const App = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/header" component={HeaderNav}/>
            <Route exact path="/*" component={DummyPresenter}/>
        </Switch>
      </BrowserRouter>
  );
};

export default App;
