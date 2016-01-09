import 'babel-core/polyfill';

﻿import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './configureStore';
import App from './containers/app';

const store = configureStore();

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          // Additional routes here
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
