//@ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import categories from './reducers/categories';
import posts from './reducers/posts';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =  combineReducers({ categories, posts, router: routerReducer });

const history = createHistory();
const historyMiddleware = routerMiddleware(history); 

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, historyMiddleware, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
