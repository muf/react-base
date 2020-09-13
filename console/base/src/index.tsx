import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from "./component/App/App";
import {store} from "./redux/store/store";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
