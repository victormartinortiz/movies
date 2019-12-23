import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  if (process.env.NODE_ENV === 'production') composeEnhancers = compose;
  else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhancers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
