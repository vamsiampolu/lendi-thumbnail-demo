import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './createStore'
import { Provider } from 'react-redux'
import routes from './routes'
import { Router, hashHistory } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
