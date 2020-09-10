import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {LayoutPresenter} from "../Layout/LayoutPresenter";

/**
 * url 단위로 page 제공
 */
export const App = () => {
  return (
      <BrowserRouter>
          <Switch>
            <Route exact path="*" name="home" component={LayoutPresenter}/>
        </Switch>
      </BrowserRouter>
  );
};

export default App;
